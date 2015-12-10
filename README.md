# mp3-duration ![Travis-Build](https://travis-ci.org/ddsol/mp3-duration.svg?branch=master)

> Calculate duration of an MP3


## Install

```
$ npm install --save mp3-duration
```

## Usage

```javascript
var mp3Duration = require('mp3-duration');

mp3Duration('file.mp3', function (err, duration) {
  if (err) return console.log(err.message);
  console.log('Your file is ' + duration + ' seconds long');
});
```

## API

## mp3Duration(filePath, callback) 

### filePath

Type: `string`

Path to the file

### callback(error, duration)

Type: `function`

Callback to be called once duration is calculated

## License

MIT © Han de Boer
