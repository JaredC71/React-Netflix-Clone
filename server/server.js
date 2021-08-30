const express = require("express");

const PORT = process.env.PORT || 3001; //specifiy the port for deployment, use 3001 for development
const app = express(); //get the express juice

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);

});
