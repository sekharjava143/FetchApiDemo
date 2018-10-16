function doublethevalue(x)
{
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve(x*2);
        },1000)
    })
}

function doublethevalue1(x)
{
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve(x*2);
        },5000)
    })
}

async function evaluateExpression(){
    const a =  await doublethevalue(1000);
    console.log("test 1  "+a);
    const b =  await doublethevalue1(20);
    console.log("test 2  "+b);
    const c =   await doublethevalue(30);
    console.log("test 3  "+c);

    return a+b+c;
}

evaluateExpression().then(response =>{
    console.log(response);
})