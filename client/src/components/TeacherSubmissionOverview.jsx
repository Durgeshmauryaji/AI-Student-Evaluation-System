import { useEffect, useState } from "react";
import api from "../services/api";


function TeacherSubmissionOverview(){

 const [data,setData] = useState(null);


 const getOverview = async()=>{

  try{

   const res = await api.get(
    "/submission/teacher-overview"
   );

   setData(res.data);


  }catch(error){

   console.log(error);

  }

 };


 useEffect(()=>{

  getOverview();

 },[]);



 return(

  <div className="bg-white rounded-xl shadow-lg p-6 mt-8">


   <h2 className="text-2xl font-bold mb-5">
    Student Submission Overview 📩
   </h2>


   <p className="mb-5 text-gray-600">

    Total Submissions:
    <span className="font-bold ml-2">
     {data?.totalSubmissions || 0}
    </span>

   </p>



   {
    data?.submissions?.length === 0 ?

    (

     <p className="text-gray-500">
      No student submissions yet.
     </p>

    )

    :

    (

     <div className="space-y-4">


     {
      data?.submissions?.map((item)=>(


       <div
        key={item._id}
        className="border rounded-xl p-5"
       >


        <h3 className="text-xl font-bold">
         {item.student.name}
        </h3>


        <p className="text-gray-500">
         {item.student.email}
        </p>



        <hr className="my-3"/>


        <p>
         Assignment:
         <b className="ml-2">
          {item.assignment.title}
         </b>
        </p>


        <p>
         Subject:
         <b className="ml-2">
          {item.assignment.subject}
         </b>
        </p>



        <p className="mt-2">

         Status:

         {
          item.evaluated ?

          <span className="text-green-600 font-bold ml-2">
           AI Evaluated ✅
          </span>

          :

          <span className="text-yellow-600 font-bold ml-2">
           Pending ⏳
          </span>

         }

        </p>



        {
         item.score !== null &&
         (
          <p className="mt-2">
           Score:
           <b className="ml-2">
            {item.score}/10
           </b>
          </p>
         )
        }


       </div>


      ))
     }


     </div>

    )
   }


  </div>

 );

}


export default TeacherSubmissionOverview;