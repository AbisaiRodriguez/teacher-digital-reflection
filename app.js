var express = require("express"),
    app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home")
});

app.get("/cstpGrowthDevelopment", (req, res) => {
    res.render("cstpGrowthDevelopment")
});

app.get("/impactOnStudentSuccess", (req, res) => {
    res.render("impactOnStudentSuccess")
});


//app.listen(3000);
app.listen(process.env.PORT, process.env.IP);
