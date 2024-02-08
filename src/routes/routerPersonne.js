const express= require('express');
const { postData, getData } = require('../CONTROLLER/postController');
const router = express.Router()

router.get('/', getData)
router.post('/', postData);
router.get('/postData',(req,res)=>{
    const {body,url}= req.bady
    if(!body || !url){
       res.status('400').json({message:"add contente"})
    }
   
})

router.put('', (req,res)=>{})
router.delete('', (req,res)=>{})



 module.exports = router