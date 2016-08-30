var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*
write up data feed connection for games like students for
games
->League of legends
-->Played games
-->Favorite games
-->Hottest League games
-->Biggest Sidepot League games
-->Biggest Pot League games
ultimately we show the  netflix feed illustrating the biggest pot/sidepot event if they are clicked up

*/
module.exports = router;
