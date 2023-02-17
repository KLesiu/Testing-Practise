const capitalize=require("../scripts/capitalize")

test("testing first letter",()=>{
expect(capitalize("my name is Jakub")).toMatch("My name is Jakub")
})
test("testing first letter (second example)",()=>{
    expect(capitalize("java script is the most excited programming language")).toMatch('Java script is the most excited programming language')
})