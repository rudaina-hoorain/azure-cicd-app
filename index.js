const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('🚀 v2 - Auto-deployed via Azure CI/CD Pipeline');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});