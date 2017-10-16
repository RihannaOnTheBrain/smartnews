var express = require('express');
var router = express.Router();

/* GET news listing */
router.get('/', function(req, res, next) {
  news = [
      {'url':'http://us.cnn.com/2017/02/15/politics/andrew-puzder-failed-nomination/index.html',
       'title':"Inside Andrew Puzder's failed nominatin",
       'description':"In the end, Andrew Puzder had too much baggage -- both personal and professional",
       'source':'cnn',
       'urlToImage':'http://cdn.cnn.com/cnnnext/dam/assets/170215152157-mitch-mcconnell-02-13-2017-medium-plus-169.jpg',
       'digest':"3RjuEomJo2601syZbU70HA==\n",
       'reason':"Recommend"
     },
     {'url':'http://us.cnn.com/2017/02/15/politics/andrew-puzder-failed-nomination/index.html',
      'title':"Inside Andrew Puzder's failed nominatin",
      'description':"In the end, Andrew Puzder had too much baggage -- both personal and professional",
      'source':'cnn',
      'urlToImage':'http://cdn.cnn.com/cnnnext/dam/assets/170215152157-mitch-mcconnell-02-13-2017-medium-plus-169.jpg',
      'digest':"3RjuEomJo2601syZbU70HA==\n",
      'reason':"Hot"
    }
  ]
  res.json(news);
});

module.exports = router;
