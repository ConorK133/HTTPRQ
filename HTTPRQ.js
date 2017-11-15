/**
 * http://usejsdoc.org/
 */
var http = require('http');

var options = {
		  hostname: process.argv[2],
		  path: '/'
		}
http.get(options, (res) => {
	 console.log(res)
});