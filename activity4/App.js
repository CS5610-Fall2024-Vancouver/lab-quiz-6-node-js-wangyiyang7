const express = require('express');
const app = express();

// Setting up Pug as a view engine
app.set('view engine', 'pug');

// Specify the location of the view folder
app.set('views', './views');

// Parsing URL-encoded data
app.use(express.urlencoded({ extended: true }));

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

app.get('/users', (req, res) => {
  res.render('users', { users });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
