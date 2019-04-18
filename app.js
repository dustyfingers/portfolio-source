var express = require('express'),
    app = express(),
    port = '8070',
    mongoose = require('mongoose'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose'),
    bodyParser = require('body-parser'),
    Project = require('./models/project'),
    User = require('./models/user')
    seedDB = require('./seed');

// require route files
var projectRoutes = require('./routes/projects'),
    skillRoutes = require('./routes/skills'),
    authRoutes = require('./routes/auth');

// check mongo for a db called portfolio_db
mongoose.connect('mongodb://localhost/portfolio_db', { useNewUrlParser: true});

// app config
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

// set up route imports
app.use(authRoutes);
app.use('/projects', projectRoutes);
app.use('/skills', skillRoutes);

// // delete & repop db
// seedDB();

// passport config
app.use(require('express-session')({
  secret: 'fflk apple sigma fat notate fiskd',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// userchecking middleware on all routes
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

// set app to listen
app.listen(port, function() {
  console.log('Server is running... on port ' + port);
});
