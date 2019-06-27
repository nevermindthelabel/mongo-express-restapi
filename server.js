const express = require('express');
// const routes = require('./routes');
const PORT = process.env.PORT || 3001

const app = express();

app.use(express.json({ extended: false }));

// app.use(routes);

app.get('/', (req, res) => {
  res.send({ message: 'successful' })
})

app.listen(PORT, () => console.log(`Server listening on port http://localhost:${3001}`));
