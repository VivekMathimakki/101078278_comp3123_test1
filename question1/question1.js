function lowerCaseWords(mixedArray){
    var res=[];
    var flag=false;
    for (let i=0;i<mixedArray.length;i++){

        if(typeof mixedArray[i]== 'string'|| mixedArray[i] instanceof String){
            flag=true;
            res.push(mixedArray[i].toLowerCase());
        } 

    }
    if(flag){
        return new Promise((resolve,reject)=>{
            resolve(res);
            console.log('resolved');
        })
    }
    else{
    return new Promise((resolve,reject)=>{
        reject('no string found');
        console.log('rejected');
    });
    }
}

console.log(lowerCaseWords(["banaNA",1,2,true]))
console.log(lowerCaseWords(["banaNA","Vivek"]))
console.log(lowerCaseWords([1,2,3,false]))

