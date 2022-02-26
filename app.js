const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

const functions = require('./functions')
app.set('view engine', 'hbs')
const path = require ('path')
app.use('/assets', express.static(path.join(__dirname, './assets')));

app.use('/js', express.static(path.join(__dirname, './js')));

app.get("/", function (req,res){
    res.render('index',{
        title: 'Tytuł strony',
        subtitle: 'Podtytuł ALK',
        dodawanie: functions.add(1, 2)
    } );
})
app.get("/about", function (req,res){
    res.render("about", {
        title: 'Tytuł strony',
        subtitle: 'Podtytuł ALK',
        dodawanie: functions.add(1, 2)

    });
})
app.get("/kontakt", function (req,res){
    res.send("kontakt za mną");
})
app.listen(port, (err) => {
    if (err) {
        return console.log(`Błąd ${err}`);
    }
    console.log(`Serwer działa prawidłowo na porcie ${port}`);
})


