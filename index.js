
const express = require('express')
// const bodyParser = require ('body-parser')
const app = express()
// const users = require('./CONTROLLER/user')
const port = 8000
const personne = require('./src/routes/routerPersonne.js')

app.use(express.json()),
app.use('/personne', personne);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

