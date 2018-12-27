var expect = require('expect');
var {generateMessage, generateLocationMessage}= require('./message');

describe('generateMessage',()=>{
  it('should generatecorrect message object',()=>{
    var from = 'itai';
    var text = 'test';
    var res = generateMessage(from, text);
    expect(res.from).toBe(from);
    expect(res.text).toBe(text) ;
    expect(typeof res.createdAt).toBe('number');
  })
})

describe('generateLocationMessage',()=>{
  it('should generate correct location object',()=>{
    var from = 'itai';
    var lat =15;
    var long = 19;
    var adress =`https://www.google.com/maps/?q=15,19`
    var res = generateLocationMessage(from, lat,long);
    expect(res.from).toBe(from);
    expect(res.url).toBe(adress) ;
    expect(typeof res.createdAt).toBe('number');
  })
})