const { tweet } = require("../modèle/data");
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');



const getData = (req, res) => {
  const id = req.params.id
  res.status(200)
   res.json({ tweet})
  


 }


const postData = (req, res) => {
  let post = req.body
  post.image = req.file?.path;
  post.userId= uuidv4()
  post.id = uuidv4()
  tweet.push(post)
  getData(req, res)

}


const putData = (req, res) => {
  const user = tweet.find(user => user.id === req.body.id);
  const index = tweet.indexOf(user);
  tweet[index] = req.body;
  res.json(req.body);
  getData(req,res)
 }

 const deleteData=(req,res)=>{
  const delet=req.body.id
  const deleteTweet=tweet.find(delet=>delet.id===delet);
  
  if( deleteTweet!==-1){
    tweet.splice(delet,1);
    res.json({message:'deleted with succed', delet:delet})
    getData(req,res)

  }else{
    res.json({message:'no  fund'})

  }
  
 }

module.exports = {
  postData, getData, putData,deleteData
}
