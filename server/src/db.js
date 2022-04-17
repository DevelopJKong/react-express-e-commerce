const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

const handleOpen = () => console.log("db connected");
const handleError = (error) => console.error("db Error!",error);

db.on("error", handleError);
db.once("open",handleOpen);
