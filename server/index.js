const express = require('express');
const path = require('path');
const app = express();

app.use('/js', express.static(path.join(__dirname, 'index.html')))

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
  })

const port = process.env.PORT || 4545;
app.listen(port, () => {console.log(`Server up on port ${port}`)});