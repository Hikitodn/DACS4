import { Socket } from "socket.io";

export const socket = (socket: Socket) => {
  try {
    console.log("Connected");
    socket.emit("Connected to video chat room");
    socket.on("code", (data, callback) => {
      socket.broadcast.emit("code", data);
    });
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
};
