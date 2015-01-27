var express = require('express');
var router = express.Router();
var diy = require('diy')('*');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('saltwater');
});

module.exports = router;
