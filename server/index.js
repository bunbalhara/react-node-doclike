
// get environment variables from .env file.
require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const DIST_DIR = process.cwd();
const HTML_FILE = path.join(DIST_DIR, 'index.html');

// use bodyParser to parse application/json content-type
app.use(bodyParser.urlencoded({ extended: false }));

// enable all CORS request
app.use(cors());

// log HTTP requests
app.use(morgan('combined'));


app.use(express.static(DIST_DIR))
app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
});

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=> {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
});
