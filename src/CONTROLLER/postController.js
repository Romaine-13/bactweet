const { tweet } = require("../modèle/data");
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');



const getData = (req, res) => {
  const id = req.params.id
  res.status(200)
   res.json({ tweet})
  


 }


const postData = async(req, res) => {
  let {post,user }= req.body
  await Prisma.body.create({user})
  post.image = req.file?.path;
  post.userId= uuidv4()
  post.id = uuidv4()
  tweet.push(post)
  res.status(200).json({ Message:'succes'})
  getData(req, res)
  .catch(async()=>{
    res.status(401).json({message:'error processus'})
  })


}


const putData = async(req, res) => {
  const user = tweet.find(user => user.id === req.body.id);
  await Prisma.user.findMany({})
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
