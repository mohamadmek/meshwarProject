import express from 'express'
import bodyParser from 'body-parser'
import exphbs from 'express-handlebars'
import nodemailer from 'nodemailer'
import cookieParser from 'cookie-parser' // parses cookies
import session from 'express-session' // parses sessions
import favicon from 'serve-favicon' // serves favicon
import cors from 'cors' // allows cross-domain requests
import createError from 'http-errors' // better JS errors
import path from 'path';
const authRoute = require('./auth');


const app = express(); // create a new app
const IS_PRODUCTION = app.get('env') === 'production'

if (IS_PRODUCTION) {
  app.set('trust proxy', 1) // secures the app if it is running behind Nginx/Apache/similar
}

app.use(cors()); // allows cross domain requests
app.use(express.json()); // allows POST requests with JSON
app.use(bodyParser.json()); 
app.use(express.urlencoded({ extended: false })); // allows POST requests with GET-like parameters
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(cookieParser()); // Parses cookies
app.use(express.static(path.join(__dirname,'../public')));
app.use('/api/user', authRoute)
// app.use(session({ // handles sessions
//   secret: 'keyboard cat', // <-- this should be a secret phrase
//   cookie: { secure: IS_PRODUCTION }, // <-- secure only in production
//   resave: true,
//   saveUninitialized: true
// }))


export default app; 
