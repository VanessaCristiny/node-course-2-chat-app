var expect = require('expect');

var {generateMessage} = require('./message');

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
