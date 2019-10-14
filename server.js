const express = require("express");
const routes = require("./routes");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 3001;

const app = express();

connectDB();

app.use(express.json());

app.use(routes);

app.listen(PORT, () =>
  console.log(`Server listening on port http://localhost:${PORT}`)
);
