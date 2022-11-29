require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const reactViews = require('express-react-views');
const mongoose = require('mongoose');
const Log = require('./models/logs');
const methodOverride = require('method-override');


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
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// Seed Route
app.get("/logs/seed", (req, res) => {
    Log.create([
      {
        title:'grapefruit',
        entry:'pink',
        shipIsBroken: true
      },
      {
        title:'grapefruit',
        entry:'pink',
        shipIsBroken: true
      },
      {
        title:'grapefruit',
        entry:'pink',
        shipIsBroken: true
      }
    ], (err, data) => {
    //   res.redirect("/logs")
    console.log(data);
    })
  })

// INDEX
app.get('/logs', (req, res) => {
    Log.find({}, (err, allLogs) => {
        if(!err) {
            res.status(200).render('Index', {
                logs: allLogs
            })
        } else {
            res.status(400).send(err)
        }
    })
})

// NEW
app.get('/logs/new', (req, res) => {
    res.render('New');
})

// DELETE
app.delete('/logs/:id', (req, res) => {
    req.body.shipIsBroken = req.body.shipIsBroken === 'on' ? true : false;
    Log.findByIdAndDelete(req.params.id, req.body, (err, updatedLog) => {
        if(!err) {
            res.status(200).redirect(`/logs`)
        } else {
            res.status(400). send(err);
        }
    })
})

// CREATE
app.post('/logs', (req, res) => {
    req.body.shipIsBroken = req.body.shipIsBroken === 'on' ? true : false;

    Log.create(req.body, (err, createdLog) => {
        if(!err) {
            res.status(200).redirect('/logs');
        } else {
            res.status(400).send(err);
        }
    });
})

// SHOW
app.get('/logs/:id', (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        if(!err) {
            res.status(200).render('Show', {
                logs: foundLog
            })
        } else {
            res.status(400).send(err)
        }
    })
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})