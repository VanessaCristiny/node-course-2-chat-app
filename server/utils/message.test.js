var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {

    var from = 'Vanessa';
    var text = 'Hola';
    var res = generateMessage(from, text);

    expect(res.text).toBe(text);
    expect(res.from).toBe(from);
    expect(res.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate the correct location object', () => {
    var from = 'Vanessa';
    var lat = -19.286607;
    var lng = -41.999096;
    var res = generateLocationMessage(from, lat, lng);

    var correctUrl = 'https://www.google.com/maps?q=-19.286607,-41.999096';

    expect(res.url).toBe(correctUrl);
    expect(res.from).toBe(from);
    expect(res.createdAt).toBeA('number');
  });
});
