const express= require('express');
const { postData,getData, putData, deleteData} = require('../CONTROLLER/postController');
const { upload } = require('../CONTROLLER/post');
const router = express.Router();



router.get('/', getData)
router.get('/:id', (req,res)=>{
    const search= req.params.id
    res.send(tweet[search])
})
router.post('', upload.single('image'),postData)

router.put('/:id',putData)
router.get('/:id', (req,res)=>{
    const search= req.params.id
    res.send(tweet[search])
})



router.delete('/:id',deleteData)

router.delete('/:id', (req,res)=>{
    const supprime= req.params.id
    res.send(tweet[supprime])
})

module.exports = router
