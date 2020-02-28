import app from './app';
import bcrypt from 'bcryptjs';
const router = require('express').Router();
import path from 'path';
import initializeDatabase from './db';
import { registerValidation, loginValidation } from './validation';
const multer = require('multer');


const start = async () => {
    const controller = await initializeDatabase();
    
    const storage = multer.diskStorage({
        destination: path.join(__dirname, '../public/images'),
        filename: function (req, file, cb) {
            cb(null, Date.now() + file.originalname)
        }
    })
    //to get just images not other files
    const fileFilter = (req, file, cb) => {
        //reject a file: cb(null, false)
        //accpet a file: cb(null, true)
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/gif') {
            return cb(null, true)
        } else {
            return cb(null, false)
        }
    };
    //to upload it
    const upload = multer({
        storage: storage,
        limits: { fileSize: 1000000 },
        fileFilter: fileFilter
    })

    router.post('/register', async (req, res) => {
        // Validate Inputs
        const { error } = registerValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        // Hash the password 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        try {
            let props = req.body;
            let result = await controller.register(props);
            console.log(result)
            res.json({ success: true, result })
        } catch (err) {
            // throw new Error(err.message);
            res.status(500).send(err.message)
        }
    })

    router.post('/login', upload.none(), async (req, res) => {
        const { error } = loginValidation(req.body);
        if (error) return res.status(400).json({success:false,error:error.details[0].message});
        // Check if email exists
        try {
            const props = req.body;
            const result = await controller.validateLogin(props);
            res.header('auth-token', result).json({success:true, result});
        } catch (err) {
            res.status(404).json({success: false, error: err.message});
        }
    })

}



start();
module.exports = router;