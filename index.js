const PublicSuffixList = require('publicsuffixlist')
const psl = new PublicSuffixList()
psl.initializeSync()

const getDomain = {
  get (url) {
    const res = psl.lookup(url)
    return `${res.domain}.${res.tld}`
  },
  hostname (url) {
    const spliturl = url.indexOf('://') > -1 ? url.split('/')[2] : url.split('/')[0]
    return spliturl.split(':')[0]
  },
  origin (url) {
    const hosturl = getDomain.hostname(url)
    return hosturl.slice(0, 4) === 'www.'? hosturl.slice(4) : hosturl
  },
  clean (url) {
    const trimurl = url.trim()
    const spliturl = url.split('#')[0]
    return spliturl.slice(-1) === '/'? spliturl.slice(0,-1) : trimurl
  },
  uniq (url) {
    const cleanurl = getDomain.clean(url)
    const spliturl = cleanurl.split('://')[1]
    return spliturl !== undefined && spliturl.slice(0, 4) === 'www.'? spliturl.slice(4) : cleanurl
  }
}

module.exports = getDomain
