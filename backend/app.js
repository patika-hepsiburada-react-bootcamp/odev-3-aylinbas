const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

const languages = [
  { id: 0, name: "Swift", point: "0" },
  { id: 1, name: "TypeScript", point: "0" },
  { id: 2, name: "Go", point: "0" },
  { id: 3, name: "C#", point: "0" },
  { id: 4, name: "JavaScript", point: "0" },
  { id: 5, name: "Java", point: "0" },
  { id: 6, name: "Python", point: "0" },
  { id: 7, name: "C", point: "0" },
  { id: 8, name: "C++", point: "0" },
];

io.on("connection", (socket) => {
  console.log("a user connected");
  io.emit("new-survey", languages);
  socket.on("new-survey", (id) => {
    console.log("New itemId:", id);
    const data = languages;
    const index = data.findIndex((language) => language.id === id);
    data[index].point = parseInt(data[index].point) + 1;

    io.emit("new-survey", languages);
  });

  socket.on("disconnect", () => console.log("a user disconnected"));
});
// const setLanguagePoint = (id) => {
//   const data = languages;
//   const index = data.findIndex((language) => language.id === id);

//   data[index].point = parseInt(data[index].point) + 1;
// };

server.listen(3000, () => {
  console.log("listening on *:3000");
});
