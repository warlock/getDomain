# getDomain
Get domain or hostname from url

https://www.npmjs.com/package/getdomain

## INSTALL:
```
npm install getdomain
```

## GET:
```javascript
var domain = require('getdomain')
domain.get('http://npmjs.com/package/spellbook')
domain.get('http://www.npmjs.com/package/spellbook')
domain.get('https://docs.npmjs.com/')
```
-> npmjs.com

## HOSTNAME:
```
domain.hostname('https://docs.npmjs.com/getting-started/what-is-npm')
```
-> docs.npmjs.com

```
domain.hostname('http://npmjs.com/package/spellbook')
```
-> npmjs.com

```
domain.hostname('http://www.npmjs.com/package/spellbook')
```
-> www.npmjs.com


## ORIGIN:
```
domain.origin('https://docs.npmjs.com/getting-started/what-is-npm')
```
-> docs.npmjs.com

```
domain.origin('http://npmjs.com/package/spellbook')
```
-> npmjs.com

```
domain.origin('http://www.npmjs.com/package/spellbook')
```
-> npmjs.com