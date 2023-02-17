const capitalize=(string)=>{
    let first;
    let rest;
    for(let i=0;i<string.length;i++){
        if(i==0){
            first=string.charAt(0).toUpperCase()
        }
        if(i==1){

            rest=string.charAt(1)
        }
        if(i>1){
            rest+=string.charAt(i)
        }
    }
    return first+rest

}
   
module.exports=capitalize
