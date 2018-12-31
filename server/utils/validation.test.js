const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values',()=>{
        var value =12
        var res = isRealString(value);
        expect(res).toBe(false);
    })
    it('should reject string with only spaces',()=>{
        var value ='            ';
        var res = isRealString(value);
        expect(res).toBe(false);
    })
    it('should reject string with non-space characters',()=>{
        var value ='         4   a  ';
        var res = isRealString(value);
        expect(res).toBe(true);
    })
})