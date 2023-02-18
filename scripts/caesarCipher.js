const caesarCipher=(string,switchNumber)=>{
    let al=[`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`]
    string=string.split('')
    let newString=''
    for(let i=0;i<string.length;i++){
        if(string[i]===' '){
            newString+=string[i]
        }else if(string[i]===`,`) newString+=string[i]
        else if(string[i]===`.`)  newString+=string[i]
        else if(string[i]===`?`)  newString+=string[i]
        else if(string[i]===`!`)  newString+=string[i]
        else{
            
            let inx=al.indexOf(string[i].toLowerCase())
            let result=inx+switchNumber
            if(result>=al.length){
       while(result>=al.length){
       result-=al.length
       
       }
       string[i]=al[result]
            }else{
               string[i]=al[result]
            }
            
            newString+=string[i]
           }
        }
     
    return newString

}
module.exports=caesarCipher
