import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import evaluationRoutes from "./routes/evaluationRoutes.js";
import assignmentRoutes from "./routes/assignmentRoutes.js";
import submissionRoutes from "./routes/submissionRoutes.js";
import aiEvaluationRoutes from "./routes/aiEvaluationRoutes.js";


dotenv.config();

connectDB();


const app = express();


app.use(cors());

app.use(express.json());


// Routes

app.use(
  "/api/auth",
  authRoutes
);


app.use(
  "/api/evaluation",
  evaluationRoutes
);


app.use(
  "/api/assignment",
  assignmentRoutes
);


app.use(
  "/api/submission",
  submissionRoutes
);


app.use(
  "/api/ai-evaluation",
  aiEvaluationRoutes
);



app.get("/", (req, res) => {

    res.send("API Running...");

});


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {

    console.log(
      `Server running on port ${PORT}`
    );

});