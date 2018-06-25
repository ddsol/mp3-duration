var assert = require('assert'),
  mp3Duration = require('../index.js'),
  fs = require('fs');

describe('mp3Duration', function () {

  it('returns a correct value for VBR duration', async () => {
    const length = await mp3Duration('./tests/demo - vbr.mp3');
    assert.equal(length, 285.727, 'Length not as expected');
  });

  it('returns a correct value for CBR duration with estimate', async () => {
    const length = await mp3Duration('./tests/demo - cbr.mp3', true);
    assert.equal(length, 285.727, 'Length not as expected');
  });

  it('returns a correct value for CBR duration without estimate', async () => {
    const length = await mp3Duration('./tests/demo - cbr.mp3');
    assert.equal(length, 285.78, 'Length not as expected');
  });

  it('returns a correct value for VBR duration when passing a buffer instead of a filename', async () => {
    const buffer = fs.readFileSync('./tests/demo - vbr.mp3');

    const length = await mp3Duration(buffer);
    assert.equal(length, 285.727, 'Length not as expected');
  });

  it('return a correct value for CBR duration without estimate when passing a buffer instead of a filename', async () => {
    const buffer = fs.readFileSync('./tests/demo - cbr.mp3');

    const length = await mp3Duration(buffer);
    assert.equal(length, 285.78, 'Length not as expected');
  });

});
