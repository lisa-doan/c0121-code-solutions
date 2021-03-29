const express = require('express');
const path = require('path');
const app = express();

const public = path.join(__dirname, 'public');

const staticPub = express.static(public);
app.use(staticPub);

app.listen(3000, () => {
  console.log('listening on port 3000!')
})
