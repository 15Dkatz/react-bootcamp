const express = require('express');

const app = express();

app.get('/ping', (req, res) => {
  res.send('pong');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
