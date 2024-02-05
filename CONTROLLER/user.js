const express= require('express')
const router = express.Router ()


 router.get('/',(req,res) => {
    res.status(200).json({Message:"TOUT EST POSSIBLE"})
 });




 module.exports = router;