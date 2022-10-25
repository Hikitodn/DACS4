import * as dotenv from "dotenv";
import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import { router as Routes } from "./routes/routes";

// Config PORT
dotenv.config();
const port = process.env.PORT;

// Setup Server
const app = express();
const server = http.createServer(app);
app.use([
  cors(),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false }),
  Routes,
]);

// Server run
server.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
