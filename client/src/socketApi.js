import { io } from "socket.io-client";

let socket;

export const connectSocket = () => {
    socket = io("http://localhost:3000", { transports: ['websocket'] });
};