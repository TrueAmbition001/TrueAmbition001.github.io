const express        = require('express');
const flash          = require('connect-flash');
const cookieSession  = require('cookie-session');
const passport       = require('passport');
const authRoutes     = require('./routes/auth-routes');
const profileRoutes  = require('./routes/profile-routes');
const passportSetup  = require('./config/passport-setup');
const mongoose       = require('mongoose').set('debug', true);
const keys           = require('./config/keys');
const bodyParser     = require('body-parser');
const morgan         = require('morgan');
const graphqlHTTP    = require('express-graphql');
const schema         = require('./schema/schema');
const app            = express();

//setting up middleware + initializing passport
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(passport.initialize());
app.use(passport.session());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

// set up session cookies
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

app.use(flash());

// connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('connected to database');
});

// set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

// create home route
app.get('/', (req, res) => {
    res.render('home');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log(`The server is running on port ${PORT}`);
});

function newFunction() {
	return '/views/index.html';
}
