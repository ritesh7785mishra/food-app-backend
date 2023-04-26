const express = require("express");
const foodItemsRouter = require("./routers/foodItemsRouter");
const userRouter = require("./routers/userRouter");
const cors = require("cors");
const orderRouter = require("./routers/orderRouters");

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
app.listen(3000);

app.use("/food", foodItemsRouter);
app.use("/user", userRouter);
app.use("/order", orderRouter);
