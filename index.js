
const express = require('express')
const app = express()
const port = 5000
const personne = require('./src/routes/routers.js');
const user = require('./src/routes/useRouter.js')
const { tweet } = require('./src/modèle/data.js');




app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use('/personne', personne);
app.use('/user',user);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

