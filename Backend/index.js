// 25LgH6TgdfbqhqOT
const mongoose = require("mongoose");

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const port = 8080;
mongoose
  .connect(
    "mongodb+srv://zaidkamboo100:25LgH6TgdfbqhqOT@cluster0.7qcwaul.mongodb.net/mydb"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error inserting data:", error);
  });
app.use("/data", require("./Routes/dataRoutes.js"));
app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.listen(port, () => {
  console.log(`DashBoard backend app listening on port ${port}`);
});
