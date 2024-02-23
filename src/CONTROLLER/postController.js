const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const { tweet } = require("../modèle/data");
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');
const { boolean } = require('joi');



const getData = (req, res) => {
  const id = req.params.id
  res.status(200)
   res.json({ tweet})
  


 }


const postData = async(req, res) => {
  let post= req.body
  await prisma.post.create({ 
    data :{
      title :post.title,
      body:post.bady,
      image : req.file?.path,
      like:post.like,
      repost:post.repost,
    }
    
  }
  )
  
  tweet.push(post)
  res.status(200).json({ Message:'succes'});
  // res.getData(req,res)

}


const putData = async(req, res) => {
  const user = tweet.find(user => user.id === req.body.id);
  // await prisma.user.findMany({})
  const index = tweet.indexOf(user);
  tweet[index] = req.body;
  res.json(req.body);
  // getData(req,res)
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
