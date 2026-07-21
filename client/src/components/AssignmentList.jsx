import { useEffect, useState } from "react";
import api from "../services/api";


function AssignmentList() {


  const [assignments,setAssignments] = useState([]);

  const [loading,setLoading] = useState(true);


  const [selectedAssignment,setSelectedAssignment] =
    useState(null);


  const [editAssignment,setEditAssignment] =
    useState(null);



  // Fetch Assignments
  const getAssignments = async()=>{

    try{

      setLoading(true);


      const res = await api.get(
        "/assignment/my"
      );


      setAssignments(res.data);


    }catch(error){

      console.log(error);

    }
    finally{

      setLoading(false);

    }

  };



  useEffect(()=>{

    getAssignments();

  },[]);





  // Delete Assignment

  const deleteAssignment = async(id)=>{


    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this assignment?"
      );


    if(!confirmDelete)
      return;



    try{


      await api.delete(
        `/assignment/${id}`
      );


      alert(
        "Assignment deleted successfully"
      );


      getAssignments();


    }catch(error){


      alert(
        error.response?.data?.message ||
        "Delete failed"
      );


    }


  };





  // Update Assignment

  const updateAssignment = async()=>{


    try{


      await api.put(

        `/assignment/${editAssignment._id}`,

        editAssignment

      );


      alert(
        "Assignment updated successfully"
      );


      setEditAssignment(null);


      getAssignments();


    }catch(error){


      alert(
        error.response?.data?.message ||
        "Update failed"
      );


    }


  };






return (

<>


<div className="bg-white rounded-xl shadow-lg p-8 mt-10">


<h2 className="text-2xl font-bold mb-6">
My Assignments
</h2>



{
loading ?

<p>
Loading assignments...
</p>


:

assignments.length===0 ?

<p className="text-gray-500">
No assignments created yet.
</p>


:


<div className="space-y-5">


{

assignments.map((assignment)=>(


<div

key={assignment._id}

className="border rounded-xl p-5 flex justify-between items-center"

>


<div>


<h3 className="text-xl font-bold">
{assignment.title}
</h3>


<p className="text-gray-500">
Subject: {assignment.subject}
</p>


<p className="text-gray-500">
Questions: {assignment.questions.length}
</p>


<p className="text-gray-500">
Deadline:
{" "}
{new Date(
assignment.deadline
).toLocaleDateString()}
</p>


</div>




<div className="flex gap-3">


<button

onClick={()=>
setSelectedAssignment(assignment)
}

className="bg-blue-500 text-white px-4 py-2 rounded"

>
View
</button>



<button

onClick={()=>
setEditAssignment(
JSON.parse(
JSON.stringify(assignment)
)
)
}

className="bg-yellow-500 text-white px-4 py-2 rounded"

>
Edit
</button>




<button

onClick={()=>
deleteAssignment(
assignment._id
)
}

className="bg-red-500 text-white px-4 py-2 rounded"

>
Delete
</button>


</div>



</div>


))

}



</div>


}


</div>









{/* View Modal */}

{

selectedAssignment &&

<div className="fixed inset-0 bg-black/50 flex items-center justify-center">


<div className="bg-white p-8 rounded-xl w-full max-w-3xl">


<h2 className="text-3xl font-bold">

{selectedAssignment.title}

</h2>


<p className="mt-2">
Subject:
{" "}
{selectedAssignment.subject}
</p>




{
selectedAssignment.questions.map((q)=>(


<div

key={q._id}

className="border p-4 mt-4 rounded"

>


{q.questionNumber}.
{" "}
{q.text}


</div>


))

}




<button

onClick={()=>
setSelectedAssignment(null)
}

className="mt-6 bg-gray-700 text-white px-5 py-2 rounded"

>

Close

</button>


</div>


</div>

}









{/* Edit Modal */}

{

editAssignment &&

<div className="fixed inset-0 bg-black/50 flex items-center justify-center">


<div className="bg-white p-8 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">


<h2 className="text-2xl font-bold mb-5">

Edit Assignment

</h2>





<input

className="border p-3 w-full mb-4 rounded"

value={editAssignment.title}

onChange={(e)=>

setEditAssignment({

...editAssignment,

title:e.target.value

})

}

/>




<input

className="border p-3 w-full mb-4 rounded"

value={editAssignment.subject}

onChange={(e)=>

setEditAssignment({

...editAssignment,

subject:e.target.value

})

}

/>





<input

type="date"

className="border p-3 w-full mb-4 rounded"

value={
editAssignment.deadline?.slice(0,10)
}

onChange={(e)=>

setEditAssignment({

...editAssignment,

deadline:e.target.value

})

}

/>







<h3 className="text-xl font-bold mt-5 mb-3">

Questions

</h3>





{

editAssignment.questions.map((q,index)=>(


<div

key={index}

className="border p-4 rounded mb-4"

>


<p className="font-semibold mb-2">

Question {index+1}

</p>




<input

className="border p-2 w-full rounded"

value={q.text}

onChange={(e)=>{


const questions =
[
...editAssignment.questions
];


questions[index].text =
e.target.value;



questions[index].questionNumber =
index+1;



setEditAssignment({

...editAssignment,

questions

});


}}

/>





<button

className="mt-3 bg-red-500 text-white px-3 py-1 rounded"

onClick={()=>{


const questions =
editAssignment.questions.filter(
(_,i)=>i!==index
);



setEditAssignment({

...editAssignment,

questions

});


}}

>

Remove Question

</button>


</div>


))

}






<button

className="bg-blue-500 text-white px-4 py-2 rounded mb-5"

onClick={()=>{


setEditAssignment({

...editAssignment,


questions:[

...editAssignment.questions,

{

questionNumber:
editAssignment.questions.length+1,

text:""

}

]

});


}}

>

+ Add Question

</button>






<div className="flex gap-4">


<button

onClick={updateAssignment}

className="bg-green-600 text-white px-5 py-2 rounded"

>

Save

</button>



<button

onClick={()=>
setEditAssignment(null)
}

className="bg-gray-500 text-white px-5 py-2 rounded"

>

Cancel

</button>


</div>



</div>


</div>

}


</>

);


}


export default AssignmentList;