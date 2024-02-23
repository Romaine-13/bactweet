const { v4: uuidv4 } = require('uuid');
const {users} = require('../modèle/User.js');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

 const getUser = (req, res) => {

    const id = req.params.userId
    res.status(200)
     res.json({ users})
   }
const postUser = (req, res) => {
    let profil = req.body
    profil.image = req.file?.path;
    profil.userId= uuidv4()
    users.push(profil)
    getUser(req, res)
  
  }
const putUser= (req, res) => {
    const user = users.find(user => user.userId === req.body.id);
    const index = users.indexOf(user);
    users[index] = req.body;
    res.json(req.body);
    getUser(req,res)
   }
  
   const deleteUser=(req,res)=>{
    const delet=req.body.userId
    const deleteTweet=users.find(delet=>delet.userId===delet);
    
    if( deleteTweet!==-1){
      users.splice(delet,1);
      res.json({message:'deleted with succed', delet:delet})
      getData(req,res)
  
    }else{
      res.json({message:'no  fund'})
  
    }
    
   }
   module.exports={ getUser, postUser,putUser,deleteUser}