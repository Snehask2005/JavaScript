const express = require('express');
const app = express();

const port = 3000;


app.use(express.json());

app.post('/data', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 
