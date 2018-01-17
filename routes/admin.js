var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    // res.send('respond with a resource');
    res.json([{
        id: 1,
        username: "I Made Yoga"
    }, {
        id: 2,
        username: "Ketut Bambang Susilo"
    }]);
});

module.exports = router;