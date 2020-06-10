const express = require('express');
const os = require('os');

const app = express();
app.use(express.json());
app.use('/', express.static('public'));
const port = 3000;


app.listen(port, () => {
  console.log(`listening at http://${os.networkInterfaces().lo0[0].address}:${port}`);
});
