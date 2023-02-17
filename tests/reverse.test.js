const reverseString=require("../scripts/reverse")

test("check to reverse string",()=>{
    expect(reverseString("Hello!")).toMatch("!olleH")
})

test("check to reverse string (second example)",()=>{
    expect(reverseString("Testing give much fun")).toMatch("nuf hcum evig gnitseT")
})