// 1).we are importing express module which we installed using npm i
import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/auth-route.js";
import sessionRoutes from "./routes/session-route.js";
import aiRoutes from "./routes/ai-route.js";
import cors from "cors"; //cross origin resource sharing (browser blocks the request which comes from anaywhere but localhost:8000)
import { connectDB } from "./config/database-config.js";

dotenv.config();

const app = express(); //object ={listen}
// 4.)decalre routes -> app.http_method ('endpoint',callback)
app.use(
  cors({
    origin: ["http://localhost:5173", "https://your-frontend.onrender.com", "http://localhost:5174/"],
    credentials: true,
  }),
);
app.use(express.urlencoded({ extended: true })); //this
app.use(express.json());

app.use("/api/auth", userRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/ai", aiRoutes);

const PORT = process.env.PORT || 9001;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`server started on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();

//app.listen(Portnumber,callback)
//? to check if the server is running ,in cmd (git bash),goto backend foldeer and type npx nodemon index.js
//open browser -> localhost:PORT_NUMBER and press enter

// https://nodejs.org/en/ (/)=> this is base url
// https://nodejs.org/en/blog => /blog is one endpoint
// https://nodejs.org/en/download
