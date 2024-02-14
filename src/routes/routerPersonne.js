const express= require('express');
const { postData,getData, putData} = require('../CONTROLLER/postController');
const { upload } = require('../CONTROLLER/post');
const router = express.Router();





router.get('/', getData)
router.post('', upload.single('image'),postData)
router.put('',putData)
router.delete('', (req,res)=>{})

 module.exports = router