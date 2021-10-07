const express = require('express');
const path = require('path');
const app = express();

app.use('/', express.static(path.join(__dirname, '../index.html')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './server/index.js'))
  })

const port = process.env.PORT || 4545;
app.listen(port, () => {console.log(`Server up on port ${port}`)});