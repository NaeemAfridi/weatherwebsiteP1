const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 7000;

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'hbs');
app.set("views", templatePath);
hbs.registerPartials(partialPath);

app.use(express.static(staticPath));
app.get("/", (req, res)=>{
    res.render("index");
});
app.get("/about", (req, res)=>{
    res.render("about");
});
app.get("/weather", (req, res)=>{
    res.render("weather");
});
app.get("*", (req, res)=>{
    res.render("404error",{
        errMsg: "Opps! Page Not Found"
    });
});


app.listen(port, ()=>{
    console.log(`listening to the server at port no ${port}`);
});