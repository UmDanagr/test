import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

app.get("/test", (req, res) => res.send("This is a test route for the app!"));
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
