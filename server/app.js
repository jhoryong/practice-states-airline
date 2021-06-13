// EXTERNAL MODULES
const express = require('express');
const cors = require('cors');

// INTERNAL MODULES

// ROUTER MODULES
const flightRouter = require('./router/flightRouter')

// GLOBAL VARIABLES
const app = express();
const ip = 'localhost';
const port = 3001;

// LOGIC
app.use(cors());
app.use(express.json());
app.use('/flight', flightRouter);

app.get('/', (req, res) => {
  res.send('StatesAirline Server.');
})

app.listen(port, ip, () => {
  console.log(`StatesAirline Server running on http://${ip}:${port}`)
})

module.exports = app;