import mongoose from "mongoose";


const questionSchema = mongoose.Schema({

  questionNumber:{
    type:Number,
    required:true
  },

  text:{
    type:String,
    required:true
  }

});



const assignmentSchema = mongoose.Schema({

  title:{
    type:String,
    required:true
  },


  subject:{
    type:String,
    required:true
  },


  questions:[
    questionSchema
  ],


  deadline:{
    type:Date
  },


  teacher:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  }


},
{
  timestamps:true
});


export default mongoose.model(
  "Assignment",
  assignmentSchema
);