const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3000;
const db = require('./config/db');
const cors = require('cors')
const route = require('./route/index')
app.use(morgan('combined'));
app.use(express.urlencoded());
app.use(express.json())
db.connect();
app.use(cors())
route(app)


app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`)
})