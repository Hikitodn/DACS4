import * as dotenv from "dotenv";
import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import { router as Routes } from "./routes/routes";
import { socketManager } from "./listeners/socketManagement";
import { Server } from "socket.io";

// Config PORT
dotenv.config();
const port = process.env.PORT;

// Setup Server
const app = express();
const serverMain = http.createServer(app);
app.use([
  cors(),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false }),
  Routes,
]);

const io = new Server();
io.on("connection", socketManager);

// Server run
serverMain.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
