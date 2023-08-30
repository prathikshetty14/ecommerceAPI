const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

const db = require('./config/mongoose');

app.use('/', require('./routes'));

// -------- Start the server -------- //

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

