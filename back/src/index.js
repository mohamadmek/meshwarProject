
const dotenv = require('dotenv');
import app, { upload } from './app'
import initializeDatabase from './db';
import { response } from 'express';
import path from 'path';
import nodemailer from 'nodemailer';

const multer = require('multer');
const verify = require('./verifyToken');
dotenv.config();


const start = async() => {
  const controller = await initializeDatabase();

  //storage
const storage = multer.diskStorage({
  destination:path.join(__dirname, '../public/images'),
  filename: function(req, file, cb) {
    cb(null,Date.now()+file.originalname)
  } 
 })
 //to get just images not other files
 const fileFilter = (req, file, cb) => {
   //reject a file: cb(null, false)
   //accpet a file: cb(null, true)
   if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/gif'){
    return cb(null, true)
   } else {
    return cb(null, false)
   }
 };
 //to upload it
 const upload = multer({
   storage: storage,
   limits: {fileSize: 1000000},
   fileFilter: fileFilter
 })

  app.get('/', async (req, res, next)=>{
    try{
      const result = await controller.getEvents();
      res.json({success: true, result}); 
    } catch(err){
      next(err)
    }
  });
  
    app.get('/home', async (req, res, next) => {
	const result = await controller.getEvents();
	res.json(result);
    })

  app.get('/events', async (req, res, next)=>{
    try{
      const result = await controller.getEvents();
      let data = await controller.eventsRevenue();
      res.json({success: true, result, data});   
    }catch(err){
      next(err)
    }
 });

  app.get('/events/:id', async(req, res, next) => {
    const id = req.params.id;
    try{
      const result = await controller.getEventById(id);
      res.json({success: true, result}); 
    }catch(err){
      next(err)
    }
  })

  app.post('/events', upload.single("image"), async (req, res, next) => {
    let { location, date, title, price, remaining_seats, description } = req.body;
    let file = req.file.filename;
    const img_src = file
    try{
      let result = await controller.createEvent({ location, date, title, price, img_src, remaining_seats, description});
      res.json({success: true, result}); 
    }catch(err){
      next(err)
    } 
})

  app.delete('/events/:id', async(req, res, next) =>{
    const {id} = req.params;
    try{
      const result = await controller.deleteEvent(id)
      res.json({success: true, result}); 
    }catch(err){
      next(err)
    }
   
  });
  app.put('/events/:id', upload.none(), async(req, res, next) =>{
    const{id} = req.params;
    let event = req.body;
    try{
      const result = await controller.updateEvent(id, event);
      res.json({success: true, result}); 
    }catch(err){
      next(err)
    }
  })



  app.post('/upload', upload.single("image"), (req, res, next) => {
    try{
      const result = controller.createImage(req.file.filename);
      res.json({success: true, result}); 
    }catch(err){
      next(err)
    }
  })
  
  app.get("/gallery", async (req, res, next) => {
    try{
      const result = await controller.getImages()
      res.json({success: true, result})
    }catch(err){
      next(err);
    }
  })

  app.delete('/images/:id', async(req, res, next) => {
    const id = req.params.id;
    try{
      const result = await controller.deleteImage(id)
      res.json({success: true, result}); 
    }catch(err){
      next(err)
    }
   
  })


  app.post('/contact', async(req, res, next) => {
	let data = req.body;	
	let output = `
	<p>Contact is trying to reach you</p>
	<h3>Contact Details</h3>
	<ul>
	    <li>Name: ${data.name}</li>
	    <li>Email: ${data.email}</li>
	    <li>Address: ${data.address}</li>
	    <li>Mobile: ${data.mobile}</li>
	    <li>Message: ${data.message}</li>
	</ul>
	`;
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'maggiepowerpuffgirl@gmail.com', // generated ethereal user
        pass: 'P@ssword123_'// geerated ethereal password
      }
    });

    let info = await transporter.sendMail({
      from: 'haddadanthony06@gmail.com', // sender address
      to: "maggiepowerpuffgirl@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: output // html body

    });

    console.log("Message sent: %s", info.messageId);
  })


  app.get('/registrations', async (req, res, next) => {
    try {
      let result = await controller.getRegistrations();
      res.json({ success: true, result });
    } catch (err) {
      next(err)
    }

  })

  app.delete('/deleteregistration/:id', upload.none(), async (req, res, next) => {
    try {
      let {id} = req.params;
      let {event_id} = req.body;
      console.log(id)
      console.log(req.body)
      let result = await controller.deleteRegistration(id, event_id);
      res.json({ success: true, result });
    } catch (err) {
      next(err)
    }
  })

  app.get('/registrations', async (req, res, next) => {
    try {
      let result = await controller.getRegistrations();
      res.json({ success: true, result });
    } catch (err) {
      next(err)
    }
  })

  app.post('/addregistration', upload.none(), async (req, res, next) => {
    let { name, age, mobile, email, event_id, address } = req.body;
    try {
      let result = await controller.createRegistration({ name, age, mobile, email, event_id, address });
      res.json({ success: true, result});
      console.log(result);
    } catch (err) {
      next(err)
    }
  })

  app.get('/countreg', async(req, res, next) => {
    try{
      let result = await controller.countRegistrations()
      res.json({success: true, result});
    }catch(err){
      next(err)
    }
  })
  app.get('/sumreg', async(req, res, next) => {
    try{
      let result = await controller.sumReg()
      res.json({success: true, result});
    }catch(err){
      next(err)
    }
  })

  app.get('/countevents', async(req, res, next) => {
    try{
      let result = await controller.countEvents()
      res.json({success: true, result});
    }catch(err){
      next(err)
    }
  })

  app.use((err, req, res, next) => {
    res.status(500).json({ success: false, message: err.message })
  })

}

app.listen(8080, () => console.log(`server listening on port 8080`));

start();
