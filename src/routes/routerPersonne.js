const express= require('express');
const { postData,getData, putData, deleteData} = require('../CONTROLLER/postController');
const { upload } = require('../CONTROLLER/post');
const { tweet } = require('../modèle/data');
const { getUser, postUser, putUser, deleteUser } = require('../CONTROLLER/userController');
const router = express.Router();



router.get('/', getData,getUser)
router.get('/:id', (req,res)=>{
    const search= req.params.id
    res.send(tweet[search])
})

router.post('', upload.single('image'),postData,postUser)
router.put('/:id',putData,putUser)
router.get('/:id', (req,res)=>{
    const search= req.params.id
    res.send(tweet[search])
})

router.delete('/:id :userName',deleteData,deleteUser)
// router.get('/:id', (req,res)=>{
//     const search= re.params.id
//     res.send(tweet[search])
// })
// router.delete('/:id', (req,res)=>{
//     const supprime= req.params.id
//     res.send(tweet[supprime])
// })

 module.exports = router