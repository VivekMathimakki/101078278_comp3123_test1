
const resolvedPromise=()=>{
    return new Promise(resolve => {
        setTimeout(() => resolve("done!"), 500);
        let success={'message':'delayed success! 500 ms'}
        console.log(success);
      })
}



const rejectedPromise=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            try{
                throw new Error('error: delayed exception! 500ms');
            }catch(e){
                console.log(e)
            }
        },500)
    });
}

resolvedPromise();
rejectedPromise();