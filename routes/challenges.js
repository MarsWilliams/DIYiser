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

    var astronomer = diy({
      method: 'GET',
      uri: '/skills/astronomer/'
    }, function(err, body) {
      if (body.response.error || err) return next(err);
      astronomer = body.response;

      var meteorologist = diy({
        method: 'GET',
        uri: '/skills/meteorologist/'
      }, function(err, body) {
        if (body.response.error || err) return next(err);
        meteorologist = body.response;

        var knotter = diy({
          method: 'GET',
          uri: '/skills/knotter/'
        }, function(err, body) {
          if (body.response.error || err) return next(err);
          knotter = body.response;

          var oceanographer = diy({
            method: 'GET',
            uri: '/skills/oceanographer/'
          }, function(err, body) {
            if (body.response.error || err) return next(err);
            oceanographer = body.response;

            var traveler = diy({
              method: 'GET',
              uri: '/skills/traveler/'
            }, function(err, body) {
              if (body.response.error || err) return next(err);
              traveler = body.response;

              res.render('challenges', {
                sailor: sailor,
                astronomer: astronomer,
                meteorologist: meteorologist,
                knotter: knotter,
                oceanographer: oceanographer,
                traveler: traveler,
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
module.exports = router;