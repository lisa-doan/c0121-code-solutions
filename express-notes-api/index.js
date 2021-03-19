const express = require('express');
const data = require('./data.json');
const fs = require('fs');
const app = express();

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for(let id in data.notes) {
    notesArray.push(data.notes[id]);
  }
  res.status(200).json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const inputNum = parseInt(req.params.id, 10)
  if(isNaN(inputNum) || inputNum < 0) {
    res.status(400).json({error: 'id must be a positive integer'});
  } else if(data.notes[inputNum]) {
    res.status(200).json(data.notes[inputNum]);
  } else {
     res.status(404).json({error: `cannot find note with id: ${inputNum}`});
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    let nextId = data.nextId;
    req.body.id = nextId;
    data.notes[nextId] = req.body;
    data.nextId++;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'an unexpected error occurred' });
      } else {
        res.status(201).json(req.body);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const inputNum = parseInt(req.params.id, 10)
  if(isNaN(inputNum) || inputNum < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if(!data.notes[inputNum]) {
     res.status(404).json({ error: `cannot find note with id: ${inputNum}` });
  } else {
    delete data.notes[inputNum];
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'an unexpected error occurred'});
      } else {
        res.status(204).json();
      }
    })
  }
});

app.put('/api/notes/:id', (req, res) => {
  const inputNum = parseInt(req.params.id,10);
  if (isNaN(inputNum) || inputNum < 0) {
    res.status(400).json({ error: 'id must be a positive integer'})
  } else if(!req.body['content']) {
    res.status(400).json({ error: 'content is a required field'})
  } else if (!data.notes[inputNum]){
    res.status(404).json({ error: `cannot find note with id: ${inputNum}`})
  } else {
    req.body['id'] = inputNum;
    data.notes[inputNum] = req.body;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if(err) {
        console.error(err);
        res.status(500).json({ error: 'an unexpected error occurred' })
      } else {
        res.status(200).json(req.body);
      }
    })
  }
});

app.listen(3000, () => {
  console.log('Listening on port 3000!')
});
