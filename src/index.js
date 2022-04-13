const dotenv = require("dotenv").config();
const express = require("express");
const db = require("./db");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const userRouter = require("./routers/userRouter");
const authRouter = require("./routers/authRouter");
const productRouter = require("./routers/productRouter");

const app = express();
const logger = morgan("dev");


const PORT = 5050;
app.use(logger);
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth",authRouter);
app.use("/api/users",userRouter);
app.use("/api/products",productRouter);


app.listen(process.env.PORT || PORT, () => {
  console.log(`Backend server is running http://localhost:${PORT}`);
});
