function addSync(x,y){
    if(x%2 == 0 && y%2 == 0){
        throw new Error('Invalid arguments!');
    }
    return x+y;
}

console.log('sync - Valid arguments!');
console.log(addSync(5,3));

console.log('sync - Invalid arguments!');
try{
addSync(2,10);
}catch(e){
    console.log('Something went wrong!');
}

function addAsync(x,y,onResult){
    setTimeout(() =>{
        if(x%2 == 0 && y%2 == 0){
            //throw new Error('Invalid arguments!'); 
            // if we throw exception like this via async method 
            // it will never get cauthg as it will be thrown sometime in future so async apis will 
            //always pass the error as the first argument in the callback funtion
            
            var err = new Error('Something went worng!');
            onResult(err);
            return;
        }
        var result = x + y;
        onResult(undefined,result);
    });
}

function onResponse(error,result){
    if(error){ 
        console.log('Something went wrong!');           
        return;
    }
    console.log(result);
}

console.log('async - Valid arguments!');
addAsync(5,3,onResponse);

console.log('async - Invalid arguments!');
try{
addAsync(2,10,onResponse);
}
catch(e){
    console.log('Something went wrong!!')
}


