const express= require('express');
const { postData,getData, putData, deleteData} = require('../CONTROLLER/postController');
const { upload } = require('../CONTROLLER/post');
const { tweet } = require('../modèle/data');
// const {users} =require ('../modèle/User')

const router = express.Router();



router.get('/', getData)
router.get('/:id', (req,res)=>{
    const search= req.params.id
    res.send(tweet[search])
})
// router.get('/',getUser)
// router.get('/:userId', (req,res)=>{
//     const search= req.params.id
//     res.send(tweet[search])
// })


router.post('', upload.single('image'),postData)
// router.post('', upload.single('image'),postUser)
router.put('/:id',putData)
router.get('/:id', (req,res)=>{
    const search= req.params.id
    res.send(tweet[search])
})

// router.put('/:userId',putUser)
// router.get('/:userId', (req,res)=>{
//     const search= req.params.id
//     res.send(tweet[search])
// })

router.delete('/:id',deleteData)
// router.delete('/:userId',deleteUser)
// router.get('/:id', (req,res)=>{
//     const search= re.params.id
//     res.send(tweet[search])
// })
router.delete('/:id', (req,res)=>{
    const supprime= req.params.id
    res.send(tweet[supprime])
})

module.exports = router

// // Routes pour les tweets
// router.get('/tweets', getData);
// router.get('/tweets/:id', (req, res) => {
//     const search = req.params.id;
//     res.send(tweet[search]);
// });
// router.post('/tweets', upload.single('image'), postData);
// router.put('/tweets/:id', putData);
// router.delete('/tweets/:id', deleteData);

// // Routes pour les utilisateurs
// router.get('/users', getUser);
// router.get('/users/:userId', (req, res) => {
//     const search = req.params.userId;
//     res.send(tweet[search]);
// });
// router.post('/users', upload.single('image'), postUser);
// router.put('/users/:userId', putUser);
// router.delete('/users/:userId', deleteUser);

// module.exports = router;

