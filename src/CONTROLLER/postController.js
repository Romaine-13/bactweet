const { tweet } = require("../modèle/data");




const getData= (req,res)=>{
  res.status(200);
  res.json({tweet})
}

const postData = (req,res) => {
   let don= req.body
    tweet.push(don)
    getData(req,res)
  //  res.send(don)
   //  res.status(200)
   

 }
 
 

 module.exports={
   postData, getData
 } 
 