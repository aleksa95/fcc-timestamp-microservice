var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/:time', function(req, res) {

	function unixToNatural (unix) {
		var date = new Date(unix * 1000);
		var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
	}

	var time = req.params.time;

    if (!isNaN(time)) {
    	res.json(
    		{
    			unix: time,
    			natural: unixToNatural(time)
    		}
    	)
    } else if (!isNaN(new Date (time))) {
    	res.json(
    		{
    			unix: (new Date (time) / 1000),
    			natural: time
    		}
    	)
    } else {
    	res.json(
    		{
    			unix: null,
    			natural: null
    		}
    	)
    }

});

module.exports = router;
