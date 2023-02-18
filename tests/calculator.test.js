const calculator=require("../scripts/calculator")

test('add a to b and return result',()=>{
    expect(calculator.add(5,5)).toBe(10)
})
test('substract b from a and return result',()=>{
    expect(calculator.subtract(25,10)).not.toBe(!15)
})
test('divide a and b and check that result it isn"t undefined',()=>{
    expect(calculator.divide(150,3)).not.toBeUndefined()
})
test('divide a and b and return result',()=>{
    expect(calculator.divide(150,3)).toBe(50)
})
test('multiply a and b and return result',()=>{
    expect(calculator.multiply(0.1,0.2)).toBeCloseTo(0.02)
})
