var express = require('express');
var router = express.Router();
var index =0;
/* GET users listing. */
router.get('/', function(req, res, next) {
  index++;
  res.send(`User accesses are: ${index}`);
});

module.exports = router;
