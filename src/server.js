import express from "express";
import authorsRouter from "./api/authors/index.js";
// import authorsRouter from "./api/authors";

const server = express();
// server waits for request

server.use(express.json());

const port = 3001;

server.use("/authors", authorsRouter);
server.listen(port, () => {
  console.log("Server is running on port:", port);
});
