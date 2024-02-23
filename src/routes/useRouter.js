const router = express.Router();

router.get('/',getUser)
router.get('/:userId', (req,res)=>{
    const search= req.params.id
    res.send(tweet[search])
})
router.post('', upload.single('image'),postUser)
router.put('/:userId',putUser)
// router.get('/:userId', (req,res)=>{
//     const search= req.params.id
//     res.send(tweet[search])
// })
router.delete('/:userId',deleteUser)
// router.get('/:id', (req,res)=>{
//     const search= re.params.id
//     res.send(tweet[search])
// })