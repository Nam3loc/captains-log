const express = require('express');
const app = express();
const port = 3000;
const reactViews = require('express-react-views');

// VIEW ENGINE
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

// NEW
app.get('/', (req, res) => {
    res.render('New');
})

// CREATE
app.post('/', (req, res) => {
    if (req.body.shipIsBroken === "on"){
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }

    res.send(req.body);
})



app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})