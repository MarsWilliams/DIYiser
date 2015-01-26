var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var skillRequest = diy({
    method: 'GET',
    uri:    '/skills/sailor'
  }, function(err, body){
    if (body.response.error || err) return next(err);
    var skill = body.response;
    console.log(skill);

    var challengesRequest = diy({
      method: 'GET',
      uri:    '/skills/sailor/challenges'
    }, function(err, body) {
      var challenges = body.response;

      res.render('challenges', {
        skill: skill,
        challenges: body.response
      });
    });
  });
});

module.exports = router;
