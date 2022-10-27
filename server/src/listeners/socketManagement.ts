import { Socket } from "socket.io";

const socketManager = (socket: Socket) => {
  try {
    console.log("Connected");
    socket.on("code", (data, callback) => {
      socket.broadcast.emit("code", data);
    });
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
};

export { socketManager };
