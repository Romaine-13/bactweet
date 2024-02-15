const { tweet } = require("../modèle/data");
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');



const getData = (req, res) => {
  const id = req.params.id
  res.status(200)
   res.json({ tweet})
  


 }
// function saveData(contacts) {
//   localStorage.setItem('contacts', JSON.stringify(contacts));
// }
// function getData() {
//   return JSON.parse(localStorage.getItem('contacts'));

// }


const postData = (req, res) => {
  let post = req.body
  post.image = req.file?.path;
  post.userId= uuidv4()
  post.id = uuidv4()
  tweet.push(post)
  getData(req, res)

}


const putData = (req, res) => {
  const user = tweet.find(user => user.id === req.body.id);
  const index = tweet.indexOf(user);
  tweet[index] = req.body;
  getData(req,res)
  res.json(req.body);
 }


module.exports = {
  postData, getData, putData, 
}
