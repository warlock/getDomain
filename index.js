const getDomain = {
  get: url => {
    url = getDomain.hostname(url)
    url = url.split('.')
    if (url[url.length - 2] === 'co') return url[url.length - 3] + '.' + url[url.length - 2] + '.' + url[url.length - 1]
    else return url[url.length - 2] + '.' + url[url.length - 1]
  },
  hostname: url => {
    url = url.indexOf('://') > -1 ? url.split('/')[2] : url.split('/')[0]
    return url.split(':')[0]
  },
  origin: url => {
    url = getDomain.hostname(url)
    return url.slice(0, 4) === 'www.'? url.slice(4) : url
  },
  clean: url => {
    url = url.trim()
    url = url.split('#')[0]
    return url.slice(-1) === '/'? url.slice(0,-1) : url
  },
  uniq: url => {
    url = getDomain.clean(url)
    url = url.split('://')[1]
    return url.slice(0, 4) === 'www.'? url.slice(4) : url
  }
}

module.exports = getDomain
