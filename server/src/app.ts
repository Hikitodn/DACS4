import * as dotenv from "dotenv";
import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import Routes from "./routes/routes";
import socketManager from "./listeners/socketManager";
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

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });
io.on("connection", socketManager);

// Server run
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
