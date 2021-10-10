import { io } from "socket.io-client";

let socket;

export const connectSocket = () => {
  socket = io(process.env.REACT_APP_BASE_URL, { transports: ["websocket"] });

  socket.on("connect", () => {
    console.log("Connected!");
  });

  socket.on("connect_error", () => {
    console.log("Connection Failed!");
  });
};
export const sendSurvey = (topic, data) => {
  if (!socket) {
    return false;
  }

  socket.emit(topic, data);
};

export const subscribeToNewSurvey = (cb) => {
  if (!socket) {
    return false;
  }

  socket.on("new-survey", (languages) => {
    console.log(languages);
    cb(languages);
  });
};
