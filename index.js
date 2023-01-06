const express = require('express');
var fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.send('Hello World!');
});


//GET /.well-known/spl.txt

var usersFilePath = __dirname + '/public/data_to_share_in_json_format.json';
//var usersFilePath = path.join(__dirname, 'data_to_share_in_json_format.json');
app.get('/.well-known/assetlinks.json', (req, res) => {
    //res.send('{"test":"param1", "test2":"p2"}');
    var readable = fs.createReadStream(usersFilePath);
    readable.pipe(res);
});


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));