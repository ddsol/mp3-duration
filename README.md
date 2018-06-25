# mp3-duration ![Travis-Build](https://travis-ci.org/ddsol/mp3-duration.svg?branch=master)

> Calculate duration of an MP3

## Install

```sh
npm install mp3-duration
```

## Usage

1. JavaScript

```javascript
var mp3Duration = require('mp3-duration');

mp3Duration('file.mp3').then(duration => {
  console.log(`Your file is ${duration} seconds long`);
}).catch(e => {
  console.err(e);
});
```

2. TypeScript

```typescript
import mp3Duration = require('mp3-duration');

mp3Duration('file.mp3').then(duration => {
  console.log(`Your file is ${duration} seconds long`);
}).catch(e => {
  console.err(e);
});
```

## API

## mp3Duration(filePathOrBuffer [, cbrEstimate])

### filePathOrBuffer

Type: `string | Buffer`

Path to the file or a buffer with the file's contents

### cbrEstimate

Type: `boolean`

Defaults to `false`. When set to `true`, will estimate the length of a
constant-bitrate mp3. This speeds up the calculation a lot but isn't
guaranteed to be accurate.

### Return value

`mp3Duration` returns a Promise that resolves to the duration of the mp3 in `second` or rejects with some error.

## License

MIT © Han de Boer
