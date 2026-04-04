// 1).we are importing express module which we installed using npm i
import express from "express";
import userRoutes from "./routes/auth-route.js";
import cors from "cors"; //cross origin resource sharing (browser blocks the request which comes from anaywhere but localhost:8000)

//2).call /invoke the function
let app = express(); //object ={listen}
// 4.)decalre routes -> app.http_method ('endpoint',callback)
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.urlencoded({ extended: true })); //this
app.use(express.json());

app.use("/api/auth", userRoutes);

// 3)assign a port number to our server
app.listen(9001, () => {
  console.log("server started .....");
});
//app.listen(Portnumber,callback)
//? to check if the server is running ,in cmd (git bash),goto backend foldeer and type npx nodemon index.js
//open browser -> localhost:PORT_NUMBER and press enter

// https://nodejs.org/en/ (/)=> this is base url
// https://nodejs.org/en/blog => /blog is one endpoint
// https://nodejs.org/en/download
