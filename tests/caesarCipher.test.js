const caesarCipher=require("../scripts/caesarCipher")

test('is cipher works?',()=>{
    expect(caesarCipher("Hello",3)).toBe(`khoor`)
})
test('are punctuation changed? (example: ?)',()=>{
    expect(caesarCipher("Really?",4)).toBe('vieppc?')
})
test('is script respect spaces?',()=>{
    expect(caesarCipher("Today is a good day!",5)).toBe(`ytifd nx f ltti ifd!`)
})
test('is wrapping from z to a work?',()=>{
expect(caesarCipher("ZXYZZ",25)).toBe(`ywxyy`)
})