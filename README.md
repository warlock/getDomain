# getDomain
Get domain or hostname from url

https://www.npmjs.com/package/getdomain

## Install module:
```
npm install getdomain
```

## Get domain:
```javascript
var domain = require('getdomain')
domain.get('http://npmjs.com/package/spellbook')
domain.get('http://www.npmjs.com/package/spellbook')
domain.get('https://docs.npmjs.com/')
```
-> npmjs.com

## Get hostname:
```javascript
domain.hostname('https://docs.npmjs.com/getting-started/what-is-npm')
```
-> docs.npmjs.com

```javascript
domain.hostname('http://npmjs.com/package/spellbook')
```
-> npmjs.com

```javascript
domain.hostname('http://www.npmjs.com/package/spellbook')
```
-> www.npmjs.com


## Get origin(hostname without 'www'):
```javascript
domain.origin('https://docs.npmjs.com/getting-started/what-is-npm')
```
-> docs.npmjs.com

```javascript
domain.origin('http://npmjs.com/package/spellbook')
```
-> npmjs.com

```javascript
domain.origin('http://www.npmjs.com/package/spellbook')
```
-> npmjs.com

##License

All the code here is under MIT license. Which means you could do virtually anything with the code. I will appreciate it very much if you keep an attribution where appropriate.
The MIT License (MIT) Copyright (c) 2015 Josep Subils Rigau (josep@spellbook.io)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
