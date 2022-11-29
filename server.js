require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const reactViews = require('express-react-views');
const mongoose = require('mongoose');
const Log = require('./models/logs');
const methodOverride = require('method-override');
const logsController = require('./controllers/logsController')


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
app.use(express.static('public'));
console.log('reading css');

// ROUTES
app.use('/logs', logsController)

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})