const app = require("express")();

const port = 8000;

app.listen(port, () => console.log(`server running on ${port}`));

app.get("/fru", (req, res) => {
  res.send("mango and banana");
});
