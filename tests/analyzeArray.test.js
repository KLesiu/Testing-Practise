const analyzeArray=require("../scripts/analyzeArray")

test('Is it good result',()=>{
    expect(analyzeArray([2,3,1,5,3])).toEqual({average:2.8,min:1,max:5,length:5})
})
test(`Is it good result (second example)`,()=>{
    expect(analyzeArray([1,2,3,4,5,6,7,8,9,0])).toEqual({average:4.5,min:0,max:9,length:10})
})