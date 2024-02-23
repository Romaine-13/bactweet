
const express = require('express')
const app = express()
const port = 8080
const post = require('src/routes/routers.js')
// const router =require('../routes/routers')
const { tweet } = require('../modèle/data');






app.use(express.json());
// app.use('/router',router)
app.use('/post', post);
// app.get ("/personne/:id",(req,res)=>{
//   const tweet=
//   const id =req.params.id;
//   res.json({
//   tweet:personne[id]||null
//   })
// })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

