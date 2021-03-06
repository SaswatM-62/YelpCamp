let express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    app = express(),
    flash = require("connect-flash"),
    methodOverride = require("method-override")
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment"),
    User = require("./models/user"),
    seedDB = require("./seeds"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    commentRoutes = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    authRoutes = require("./routes/index")

let port = process.env.PORT || 3000;
mongoose.connect("mongodb+srv://saswat:ebHERFX2aXqHoUqF@cluster0.p2r5j.mongodb.net/yelp_camp?retryWrites=true&w=majority", { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true})
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"))
app.use(methodOverride("_method"))
app.use(flash());
//seedDB()

//PASSPORT CONFIG
app.use(require("express-session")({
    secret: "Secret",
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(function(req, res, next){
    res.locals.currentUser = req.user
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next()
})

app.use("/", authRoutes)
app.use("/campgrounds", campgroundRoutes)
app.use("/campgrounds/:id/comments", commentRoutes)


app.listen(port, process.env.IP, function(){
    console.log("The YelpCamp Server has started");
})