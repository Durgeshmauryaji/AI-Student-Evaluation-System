import Submission from "../models/Submission.js";
import Assignment from "../models/Assignment.js";


// ==========================
// Create Submission
// ==========================
export const createSubmission = async (req, res) => {

  try {

    const { assignmentId, answers } = req.body;


    const assignment = await Assignment.findById(
      assignmentId
    );


    if (!assignment) {

      return res.status(404).json({
        message: "Assignment not found",
      });

    }



    const existingSubmission =
      await Submission.findOne({

        student: req.user._id,

        assignment: assignmentId,

      });



    if (existingSubmission) {

      return res.status(400).json({

        message: "Assignment already submitted",

      });

    }



    const submission = await Submission.create({

      student: req.user._id,

      assignment: assignmentId,

      answers,

    });



    res.status(201).json({

      message: "Assignment submitted successfully",

      submission,

    });



  } catch(error) {


    res.status(500).json({

      message:error.message,

    });


  }

};




// ==========================
// Get Student Results
// ==========================
export const getMyResults = async (req,res)=>{


 try{


  const submissions = await Submission.find({

    student:req.user._id,

  })

  .populate(
    "assignment",
    "title subject"
  )

  .sort({

    createdAt:-1,

  });



  res.status(200).json(submissions);



 }catch(error){


  res.status(500).json({

    message:error.message,

  });


 }


};





// ==========================
// Get Teacher Submissions
// ==========================
export const getTeacherSubmissions = async(req,res)=>{


 try{


  const submissions = await Submission.find()

  .populate(
    "student",
    "name email"
  )

  .populate({

    path:"assignment",

    select:"title subject teacher",

  })

  .sort({

    createdAt:-1,

  });



  const teacherSubmissions =
    submissions.filter(

      (submission)=>

      submission.assignment &&
      submission.assignment.teacher.toString()
      ===
      req.user._id.toString()

    );



  res.status(200).json(
    teacherSubmissions
  );



 }catch(error){


  res.status(500).json({

    message:error.message,

  });


 }


};





// ==========================
// Teacher Submission Overview
// ==========================
export const getTeacherSubmissionOverview = async(req,res)=>{


 try{


  const submissions = await Submission.find()

  .populate(
    "student",
    "name email"
  )

  .populate({

    path:"assignment",

    select:"title subject teacher",

  })

  .sort({

    createdAt:-1,

  });



  const teacherSubmissions =
    submissions.filter(

      (submission)=>

      submission.assignment &&

      submission.assignment.teacher.toString()
      ===
      req.user._id.toString()

    );




  res.status(200).json({

    totalSubmissions:
      teacherSubmissions.length,


    submissions:
      teacherSubmissions.map((item)=>({


        _id:item._id,


        student:{

          name:item.student?.name,

          email:item.student?.email,

        },


        assignment:{

          title:item.assignment?.title,

          subject:item.assignment?.subject,

        },


        score:item.score,


        evaluated:item.evaluated,


        createdAt:item.createdAt,


      }))


  });



 }catch(error){


  res.status(500).json({

    message:error.message,

  });


 }


};