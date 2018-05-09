# getDomain
> Get domain or hostname from url
>
> https://www.npmjs.com/package/getdomain

## Install module:
```
npm install getdomain
```

## Get domain:
```javascript
const domain = require('getdomain')
domain.get('http://npmjs.com/package/snc')
domain.get('http://www.npmjs.com/package/snc')
domain.get('https://docs.npmjs.com/')
```
-> npmjs.com

```javascript
domain.get('http://this.is.my.buschoolname.wa.edu.au')
```
-> buschoolname.wa.edu.au

## Get TLD:
```javascript
domain.get('http://npm.co.uk/package/snc')
```
-> co.uk

## Get hostname:
```javascript
domain.hostname('https://docs.npmjs.com/getting-started/what-is-npm')
```
-> docs.npmjs.com

```javascript
domain.hostname('http://npmjs.com/package/snc')
```
-> npmjs.com

```javascript
domain.hostname('http://www.npmjs.com/package/snc')
```
-> www.npmjs.com


## Get origin(hostname without 'www'):
```javascript
domain.origin('https://docs.npmjs.com/getting-started/what-is-npm')
```
-> docs.npmjs.com

```javascript
domain.origin('http://npmjs.com/package/snc')
```
-> npmjs.com

```javascript
domain.origin('http://www.npmjs.com/package/snc')
```
-> npmjs.com

## Clean, make unique url(clean slash, hash and parameters):
```javascript
domain.clean('https://docs.npmjs.com/getting-started/what-is-npm/')
```
-> https://docs.npmjs.com/getting-started/what-is-npm

```javascript
domain.clean('https://docs.npmjs.com/getting-started/what-is-npm/#ABC')
```
-> https://docs.npmjs.com/getting-started/what-is-npm

## Clean url for make a unique id:
```javascript
domain.uniq('https://docs.npmjs.com/getting-started/what-is-npm#top')
```
-> docs.npmjs.com/getting-started/what-is-npm


## License

All the code here is under MIT license. Which means you could do virtually anything with the code. I will appreciate it very much if you keep an attribution where appropriate.

The MIT License (MIT) Copyright (c) 2015 Josep Subils (js@js.gl)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
