var express = require('express');
var router = express.Router();
var diy = require('diy')('*');
var sailorDIY;
var astronomerDIY;
var meteorologistDIY;
var knotterDIY;
var oceanographerDIY;
var travelerDIY;

//* Wherin I get some nautical-related DIY skills and associated challenges.*//
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
      newS = [];
      for (var c = 0; c < sailorChallenges.length; c++) {
        newS.push(sailorChallenges[c]['title']);
      }
      sailorChallenges = newS.join(', ');

      var astronomer = diy({
        method: 'GET',
        uri: '/skills/astronomer/challenges'
      }, function(err, body) {
        if (body.response.error || err) return next(err);
        astronomer = body.response;

        var astronomerChallenges = diy({
          method: 'GET',
          uri: '/skills/astronomer/challenges'
        }, function(err, body) {
          if (body.response.error || err) return next(err);
          astronomerChallenges = body.response;
          newA = [];
          for (var c = 0; c < astronomerChallenges.length; c++) {
            newA.push(astronomerChallenges[c]['title']);
          }
          astronomerChallenges = newA.join(', ');

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
              newM = [];
              for (var c = 0; c < meteorologistChallenges.length; c++) {
                newM.push(meteorologistChallenges[c]['title']);
              }
              meteorologistChallenges = newM.join(', ');
              console.log(newM);

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
                  newK = [];
                  for (var c = 0; c < knotterChallenges.length; c++) {
                    newK.push(knotterChallenges[c]['title']);
                  }
                  knotterChallenges = newK.join(', ');

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
                      newO = [];
                      for (var c = 0; c < oceanographerChallenges.length; c++) {
                        newO.push(oceanographerChallenges[c]['title']);
                      }
                      oceanographerChallenges = newO.join(', ');

                      var traveler = diy({
                        method: 'GET',
                        uri: '/skills/traveler/'
                      }, function(err, body) {
                        if (body.response.error || err) return next(err);
                        traveler = body.response;

                        var travelerChallenges = diy({
                          method: 'GET',
                          uri: '/skills/traveler/challenges'
                        }, function(err, body) {
                          if (body.response.error || err) return next(err);
                          travelerChallenges = body.response;
                          newT = [];
                          for (var c = 0; c < travelerChallenges.length; c++) {
                            newT.push(travelerChallenges[c]['title']);
                          }
                          travelerChallenges = newT.join(', ');
                          

                          res.render('skills', {
                            sailor: sailor,
                            astronomer: astronomer,
                            meteorologist: meteorologist,
                            knotter: knotter,
                            oceanographer: oceanographer,
                            traveler: traveler,
                            sailorChallenges: sailorChallenges,
                            astronomerChallenges: astronomerChallenges,
                            meteorologistChallenges: meteorologistChallenges,
                            knotterChallenges: knotterChallenges,
                            oceanographerChallenges: oceanographerChallenges,
                            travelerChallenges: travelerChallenges,
                            sailorDIY: 'https://diy.org/skills/sailor',
                            astronomerDIY: 'https://diy.org/skills/astronomer',
                            meteorologistDIY: 'https://diy.org/skills/meteorologist',
                            knotterDIY: 'https://diy.org/skills/knotter',
                            oceanographerDIY: 'https://diy.org/skills/oceanographer',
                            travelerDIY: 'https://diy.org/skills/traveler'
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
  });
});
module.exports = router;