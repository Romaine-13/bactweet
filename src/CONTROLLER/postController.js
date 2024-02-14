const { tweet } = require("../modèle/data");
const {v4: uuidv4} = require('uuid');
const  multer   =  require ( 'multer' );


const getData= (req,res)=>{
  res.status(200);
  res.json({tweet})
  
}
const postData =(req,res ) => {
  let post= req.body
  post.image = req.file?.path;
  post.id = uuidv4()
  tweet.push(post)
  // const stoage= localStorage.setItems('tweet', JSON.stringify(tweet))
  getData(req,res)
   
 }

 const putData=(req,res) =>{
  const put = req.params.id
  put.id=tweet.id
  getData(req,res)
  
 }

 module.exports={
   postData, getData,putData
 } 
 