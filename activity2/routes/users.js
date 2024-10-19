const express = require('express');
const router = express.Router();

let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

router.get('/', (req, res) => {
  res.json(users);
});


router.get('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);
  
    if (user) {
      res.json(user);  
  
    } else {
      res.status(404).json({ message: 'User not found'  
   });
    }
  });
  
  router.post('/', (req, res) => {
    const { name } = req.body; // Destructure name from the request body
  
    if (!name) {
      return res.status(400).json({ message: 'Missing required field: name' });
    }
  
    const newUser = {
      id: generateUniqueId(),
      name,
    };
  
    users.push(newUser);
    res.status(201).json(newUser); // Return the newly created user
  });
  
  router.delete('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);
  
    if (userIndex === -1) {
      return res.status(404).json({ message: 'User not found' });
    }
  
    users.splice(userIndex, 1); 
   // Remove the user from the array by index
    res.status(204).send(); // No content to return on successful deletion
  });
module.exports = router;
