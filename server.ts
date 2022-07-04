const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors({
    origin: "http://localhost:PORT"
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {

});

app.post('/post-request', (req, res) => {

});

app.listen(PORT, () => {console.log('Serve started on port ' + PORT)});


