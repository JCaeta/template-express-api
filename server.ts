const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({
    origin: "http://localhost:PORT"
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.send(true);
});

app.post('/post-request', (req, res) => {
    let body = req.body;
    console.log(body);
});

app.listen(PORT, () => {console.log('Serve started on port ' + PORT)});
