import { io } from "socket.io-client";

let socket;

export const connectSocket = () => {
  socket = io(process.env.BASE_URL, { transports: ["websocket"] });

  socket.on("connect", () => {
    console.log("Connected!");
  });

  socket.on("connect_error", () => {
    console.log("Connection Failed!");
  });
};
