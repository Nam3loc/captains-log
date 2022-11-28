require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const reactViews = require('express-react-views');
const mongoose = require('mongoose');
const Log = require('./models/logs')


// CONNECTION TO DATABASE
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.once("open",() => {
    console.log("connected to mongo")
  })


// VIEW ENGINE
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());


// MIDDLEWARE
app.use(express.urlencoded({extended: false}))


// NEW
app.get('/', (req, res) => {
    res.render('New');
})

// CREATE
app.post('/', (req, res) => {
    req.body.shipIsBroken = req.body.shipIsBroken === 'on' ? true : false;

    Log.create(req.body, (err, createdLog) => {
        if(!err) {
            res.status(200).redirect('/');
        } else {
            res.status(400).send(err);
        }
    });
})

// INDEX
app.get('/', (req, res) => {
    res.render('/Index');
})



app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})