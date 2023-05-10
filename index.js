const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/*apple', (req, res) => {
  res.send('good');
});

app
  .route('/route')
  .get((req, res) => {
    res.send('From a get request');
  })
  .post((req, res) => {
    // let count = req.body.count;
    let color = req.body.color;
    res.send(`From a post request you sent ${color}`);
  });

app.get('/:userId/:book1.:book2', (req, res) => {
  let user = req.params.userId;
  let book1 = req.params.book1;
  let book2 = req.params.book2;
  console.log(req.params);
  let msg = `Hello ${user} I like ${book1} and ${book2} too!`;
  res.send(`${msg}`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
