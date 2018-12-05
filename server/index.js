const express = require("express");
const { json } = require("body-parser");
const messages_controller = require("./controllers/messages_controller");
const app = express();

app.use(json());
app.use(express.static(__dirname + "/../public/build"));
app.use((req, res, next) => {
  console.log("got a request!");
  next();
});

app.get("/api/messages", messages_controller.readM);
app.post("/api/messages", messages_controller.createM);
app.delete("/api/messages/:id", messages_controller.deleteM);
app.put("/api/messages/:id", messages_controller.updateM);

//--------------------------------------------
app.listen(3001, () => {
  console.log("Listening on port: " + 3001);
});
