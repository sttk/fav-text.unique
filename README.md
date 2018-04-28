# [@fav/text.unique][repo-url] [![NPM][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Build Status][appveyor-img]][appveyor-url] [![Coverage status][coverage-img]][coverage-url]

Get an unique string in the application.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports Node.js >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.


## Install

To install from npm:

```sh
$ npm install --save @fav/text.unique
```

***NOTE:*** *npm < 2.7.0 does not support scoped package, but even old version Node.js supports it. So when you use such older npm, you should download this package from [github.com][repo-url], and move it in `node_modules/@fav/text.unique/` directory manually.*


## Usage

For Node.js, when installing `@fav/text.unique` from npm:

```js
var unique = require('@fav/text.unique');
unique(); // => 'j9688c2d0'
unique(); // => 'j9688crp1'
```

For Web browsers:

```html
<script src="fav.text.unique.min.js"></script>
<script>
var unique = fav.text.unique;
unique(); // => 'j9688c2d0'
unique(); // => 'j9688crp1'
</script>
```

***NOTE:*** *On a browser, the string returned by this function is unique in only the window.*

## API

### <u>unique() : string</u>

Returns an unique string in the application.

This unique string is not fixed-length and uses characters: `a-z0-9`.

This function creates an unique string with following methods:

```
new Date().getTime().toString(36) + <sequencial-number-in-application>.toString(36)
```

***NOTE:*** *On a browser, the string returned by this function is unique in only the window.*

#### Return:

An unique string in the application.

**Type:** string


## Checked                                                                      

### Node.js (4〜)

| Platform  |   4    |   5    |   6    |   7    |   8    |   9    |   10   |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (〜0.12)

| Platform  |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### Web browsers

| Platform  | Chrome | Firefox | Vivaldi | Safari |  Edge  | IE11   |
|:---------:|:------:|:-------:|:-------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef; |&#x25ef; |&#x25ef;|   --   |   --   |
| Windows10 |&#x25ef;|&#x25ef; |&#x25ef; |   --   |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef; |&#x25ef; |   --   |   --   |   --   |


## License

Copyright (C) 2017-2018 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-text.unique/
[npm-img]: https://img.shields.io/badge/npm-v1.0.1-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/text.unique
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-text.unique.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-text.unique
[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/sttk/fav-text.unique?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/sttk/fav-text-unique
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-text.unique/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-text.unique?branch=master
