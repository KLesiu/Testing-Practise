const reverseString=(string)=>{
    string.split()
    let newString;
    for(let i=string.length;i>=0;i--){
        if(!newString) newString=string[i]
        else{
            newString+=string[i]
        }
        
    }
    return newString
}
module.exports=reverseString