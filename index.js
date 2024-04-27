const express = require("express");

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send({
    message: "Hello World!",
    name: "Faysal Hossain",
    email: "f4faysals@gmail.com",
    phone: "01700000000",
    profession: "Software Engineer",
    server : "Node.js nginx",
    address: {
      city: "Dhaka",
      country: "Bangladesh",
    },
    address: {
      city: "Dhaka",
      country: "Bangladesh",
    },
  });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
