const router = require('express').Router();

// check if logged in or not
const authCheck = (req, res, next) => {
    if(!req.user){
        res.redirect('../login.html');
    } else {
        next();
    }
};

router.get('/', authCheck, (req, res) => {
    res.send('you are logged in, this is your profile - ' + req.user.username);
});

module.exports = router;