import express from "express";
import listEndpoints from "express-list-endpoints";
import authorsRouter from "./api/authors/index.js";
import blogPostsRouter from "./api/blogPosts/index.js";
import cors from "cors";
import { notFoundHandler } from "./errorHandlers.js";

const server = express();
// server waits for request

const port = 3001;

// ***************** MIDDLEWARES ********************
// const authorMiddleWare = (req, res, next) => {

// }

// Just to let FE communicate with BE successfully
server.use(cors());

// If you do not add this line here BEFORE the endpoints, all req.body will be UNDEFINED
server.use(express.json());

// ****************** ENDPOINTS *********************
server.use("/authors", authorsRouter);
server.use("/blogPosts", blogPostsRouter);

// ****************** ERROR HANDLERS ****************
server.use(notFoundHandler), //404
  server.listen(port, () => {
    console.table(listEndpoints(server));
    console.log("Server is running on port:", port);
  });
