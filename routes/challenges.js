var express = require('express');
var router = express.Router();
var diy = require('diy')('*');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   var skill = diy({
//     method: 'GET',
//     uri: '/skills/sailor'
//   }, function(err, body) {
//     if (body.response.error || err) return next(err);
//     var skill = body.response;
//     res.render('challenges', {
//       skill: skill
//     });
//   });
// });

// router.get('/', function(req, res, next) {
//   var challenges = diy({
//     method: 'GET',
//     uri: 'skills/sailor/challenges'
//   }, function(err, body) {
//     if (body.response.error || err) return next(err);
//     var challenges = body.response;
//     res.render('challenges', {challenges: challenges});
//   });
// });

router.get('/', function(req, res, next) {
  var sailor = diy({
    method: 'GET',
    uri: '/skills/sailor/'
  }, function(err, body) {
    if (body.response.error || err) return next(err);
    sailor = body.response;
    var sailorChallenges = diy({
      method: 'GET',
      uri: '/skills/sailor/challenges'
    }, function(err, body) {
      if (body.response.error || err) return next(err);
      sailorChallenges = body.response;
      var astronomer = diy({
        method: 'GET',
        uri: '/skills/astronomer/'
      }, function(err, body) {
        if (body.response.error || err) return next(err);
        astronomer = body.response;
        var astronomerChallenges = diy({
          method: 'GET',
          uri: '/skills/astronomer/challenges'
        }, function(err, body) {
          if (body.response.error || err) return next(err);
          astronomerChallenges = body.response;
          var meteorologist = diy({
            method: 'GET',
            uri: '/skills/meteorologist/'
          }, function(err, body) {
            if (body.response.error || err) return next(err);
            meteorologist = body.response;
            var meteorologistChallenges = diy({
              method: 'GET',
              uri: '/skills/meteorologist/challenges'
            }, function(err, body) {
              if (body.response.error || err) return next(err);
              meteorologistChallenges = body.response;
              var knotter = diy({
                method: 'GET',
                uri: '/skills/knotter/'
              }, function(err, body) {
                if (body.response.error || err) return next(err);
                knotter = body.response;
                var knotterChallenges = diy({
                  method: 'GET',
                  uri: '/skills/knotter/challenges'
                }, function(err, body) {
                  if (body.response.error || err) return next(err);
                  knotterChallenges = body.response;
                  var oceanographer = diy({
                    method: 'GET',
                    uri: '/skills/oceanographer/'
                  }, function(err, body) {
                    if (body.response.error || err) return next(err);
                    oceanographer = body.response;
                    var oceanographerChallenges = diy({
                      method: 'GET',
                      uri: '/skills/oceanographer/challenges'
                    }, function(err, body) {
                      if (body.response.error || err) return next(err);
                      oceanographerChallenges = body.response;
                      res.render('challenges', {
                        sailor: sailor,
                        astronomer: astronomer,
                        meteorologist: meteorologist,
                        knotter: knotter,
                        oceanographer: oceanographer,
                        sailorChallenges: sailorChallenges,
                        astronomerChallenges: astronomerChallenges,
                        meteorologistChallenges: meteorologistChallenges,
                        knotterChallenges: knotterChallenges,
                        oceanographerChallenges: oceanographerChallenges
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
module.exports = router;