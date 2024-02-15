const express= require('express');
const { postData,getData, putData} = require('../CONTROLLER/postController');
const { upload } = require('../CONTROLLER/post');
const { tweet } = require('../modèle/data');
const router = express.Router();



router.get('/', getData)
router.get('/:id', (req,res)=>{
    const search= req.params.id
    res.send(tweet[search])
})

router.post('', upload.single('image'),postData)
router.put('/:id',putData)
router.delete('/:id', (req,res)=>{})

 module.exports = router