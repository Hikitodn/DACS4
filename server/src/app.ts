import * as dotenv from "dotenv";
import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import Routes from "./routes/routes";
import socketManager from "./listeners/socketManagement";
import { Server } from "socket.io";

// Config PORT
dotenv.config();
const port = process.env.PORT;

// Setup Server
const app = express();
app.use([
  cors(),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false }),
  Routes,
]);

const serverMain = http.createServer(app);
const io = new Server(serverMain, { cors: { origin: "*" } });
io.on("connection", socketManager);

// Server run
serverMain.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
