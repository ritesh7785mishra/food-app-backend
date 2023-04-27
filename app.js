const express = require("express");
const foodItemsRouter = require("./routers/foodItemsRouter");
const userRouter = require("./routers/userRouter");
const cors = require("cors");
const orderRouter = require("./routers/orderRouters");
require("dotenv").config();
const { frontend_port, backend_port } = process.env;
const port = backend_port || 3000;
console.log(backend_port);

const app = express();
app.use(
  cors({
    origin: frontend_port,
  })
);

app.use(express.json());
app.listen(port);

app.use("/food", foodItemsRouter);
app.use("/user", userRouter);
app.use("/order", orderRouter);
