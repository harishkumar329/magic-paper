var express=require("express");
var routes=require("./routes/index.js");
var http=require("http");
var path=require("path");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var router = express.Router();
var app=express();
var server=http.createServer(app);

app.set("views",path.join(__dirname+"/views"));
app.set("view engine","jade");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

app.use("/",routes);
app.get("/letsbegin",require("./routes/letsbegin.js"));
app.get("/symbols",require("./routes/symbols.js"));

// catch 404 and forwarding to error handler
app.use(function(req, res, next){
    res.status(404).render('404', {title_text: "Sorry, page not found"});
});

app.listen(8080);

module.exports = app;
