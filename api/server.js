const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 80;

// place holder for the data
const events = [
  {
    firstName: "first1",
    lastName: "last1",
    eventDescription: "Event 1",
    partyCount: "4",
    email: "abc@gmail.com"
  },
  {
    firstName: "first2",
    lastName: "last2",
    eventDescription: "Event 2",
    partyCount: "2",
    email: "abc@gmail.com"
  },
  {
    firstName: "first3",
    lastName: "last3",
    eventDescription: "Event 3",
    partyCount: "5",
    email: "abc@gmail.com"
  }
];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api/events', (req, res) => {
  console.log('api/events called!')
  res.json(events);
});

app.post('/api/event', (req, res) => {
  const event = req.body.event;
  console.log('Adding event:::::', event);
  events.push(event);
  res.json("event addedd");
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});