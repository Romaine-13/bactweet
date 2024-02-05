
const express = require('express')
// const bodyParser = require ('body-parser')
const app = express()
const users = require('./CONTROLLER/user')
const port = 3000

// app.use (bodyParser.json());

app.use('/user',users);

app.get('/', (req, res) => {
  res.json('Hello World!')
})
// const userget =require('./users/userget');
// const bodyParser = require('body-parser')



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

