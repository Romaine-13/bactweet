
const  multer   =  require ( "multer" );
const path=require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'pictures')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
      const type= path.extname(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix+type)
    }
  })

  const upload = multer({ storage: storage })
module.exports={upload}
   
     