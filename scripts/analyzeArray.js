const analyzeArray=(array)=>{
    let average;
    let min=array[0]
    let max=array[0]
    let length;
    let sum=0

    for(let i=0;i<array.length;i++){
        sum+=array[i]
        if(min>array[i]){
            min=array[i]
        }
        if(max<array[i]){
            max=array[i]
        }
    }
    const object={
        average:average=sum/(array.length),
        min: min,
        max: max,
        length: array.length


    }
    return object
    

}
module.exports=analyzeArray
