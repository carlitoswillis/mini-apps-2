const express = require('express');
const os = require('os');
const path = require('path');

const port = 3000;
const app = express();

app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`listening at http://${os.networkInterfaces().lo0[0].address}:${port}`);
});
