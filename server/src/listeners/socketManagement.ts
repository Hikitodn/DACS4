import { Socket } from "socket.io";

export = (socket: Socket) => {
  try {
    console.log("Connected");
    socket.on("code", (data, _callback) => {
      socket.broadcast.emit("code", data);
    });
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
};
