// Description
//   A Hubot script that DESCRIPTION
//
// Configuration:
//   None
//
// Commands:
//   hubot theater - DESCRIPTION
//
// Author:
//   bouzuya <m@bouzuya.net>
//
module.exports = function(robot) {
  var Promise, THEATER_IDS, cheerio, eaw, request, table, _ref;
  request = require('request-b');
  cheerio = require('cheerio');
  Promise = require('es6-promise').Promise;
  table = require('text-table');
  eaw = require('eastasianwidth');
  THEATER_IDS = JSON.parse((_ref = process.env.HUBOT_THEATER_IDS) != null ? _ref : '["20204","20161"]');
  return robot.respond(/theater$/i, function(res) {
    return THEATER_IDS.reduce((function(promise, theaterId) {
      return promise.then(function(result) {
        var baseUrl, url;
        baseUrl = 'http://movies.yahoo.co.jp';
        url = "" + baseUrl + "/theater/" + theaterId + "/";
        return request(url).then(function(r) {
          var $, movies, theater;
          $ = cheerio.load(r.body);
          movies = [];
          theater = $('h1').text().trim();
          $('#schedule_list .listview__element').each(function() {
            var e, times, title;
            e = $(this);
            title = e.find('h3 a').text().trim();
            url = baseUrl + e.find('h3 a').attr('href');
            times = [];
            e.find('ul.list-inline li').each(function() {
              var l, time;
              l = $(this);
              time = l.find('.btn-schedule').contents().filter(function() {
                return this.type === 'text';
              }).text().trim();
              return times.push(time);
            });
            return movies.push({
              title: title,
              url: url,
              times: times
            });
          });
          result.push({
            theater: theater,
            movies: movies
          });
          return result;
        });
      });
    }), Promise.resolve([])).then(function(theaters) {
      var message;
      message = table(theaters.reduce((function(rows, i) {
        return rows.concat([[i.theater]].concat(i.movies.map(function(j) {
          return ['', j.title].concat(j.times);
        })));
      }), []), {
        stringLength: function(c) {
          return eaw.length(c);
        }
      });
      return res.send(message);
    });
  });
};
