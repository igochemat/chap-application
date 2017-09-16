const path = require('path');
const express = require('express');

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(publicPath));

app.listen(300, () => {
  console.log(`Server is up on ${port}`);
});
