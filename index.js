module.exports = {
	get : function (url) {
		url = url.indexOf('://') > -1 ? url.split('/')[2] : url.split('/')[0]
		url = url.split(':')[0]
		url = url.split('.')
		var len = url.length
		if (len === 2) return url.join('.')
		else return url[len - 2] + '.' + url[len - 1]
	},
	hostname : function (url) {
		url = url.indexOf('://') > -1 ? url.split('/')[2] : url.split('/')[0]
		return url.split(':')[0]
	},
	origin : function (url) {
		url = this.hostname(url)
		return url.replace('www.','')
	}
}