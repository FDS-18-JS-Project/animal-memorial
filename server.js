const express = require('express');
const cors = require('cors');

  let state = [
      { id: 3, content: 'Javascript', completed: false },
      { id: 2, content: 'CSS', completed: true },
      { id: 1, content: 'HTML', completed: false }
  ];
  
  const app = express();
  
  app.use(cors());
  app.use(express.static('src'));
  app.use(express.json());

  app.get('/userInfo', (req, res) => {
    res.send(state);
  });

  app.listen('7000', () => {
    console.log('Server is listening on http://localhost:7000');
  });
  