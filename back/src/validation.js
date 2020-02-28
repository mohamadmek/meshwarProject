const Joi = require("@hapi/joi");
//VALIDATION



const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
}

const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
// const { error } = schema.validate(req.body);
//         if(error) return res.status(400).send(error.details[0].message);