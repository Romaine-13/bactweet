const {v4: uuidv4} = require('uuid');
const Joi = require('joi');

const schema = Joi.object({
    id: Joi.string().guid({ version: 'uuidv4' }),
    title: Joi.string(),
    body: Joi.string(),
    url: Joi.string().uri()
});

const bodyValidation = (req, res, next) => {
    const {error} = schema.validate(req.body);
    if (error) {
        return res.status(400).json({error: error.details[0].message});
    }
    next();
};

// module.exports = 
    
    // bodyValidation




// const {v4 : uuidv4} = require('uuid')
// const {tweet} = require("../modèle/data");
// const Joi = require('joi');
// const schema = Joi.object({

//     // id:Joi.string().guid(['uuidv4']),
//     title:Joi.string(),
//     body: Joi.string(),
//     url: Joi.string().uri()
// })    


// const bodyValidation=(req, res, next)=>{
//     const {body,url} = req.body
// }


// module.exports={schema}



// const schem = Joi.object({
//     username: Joi.string(),
//     password: Joi.string().strip()
// });

// schema.validate({ username: 'test', password: 'hunter2' })

// const schema =Joi.object(
//     id:Joi.number(),
//     body:Joi.string(),
//     url:Joi.string()

// )



