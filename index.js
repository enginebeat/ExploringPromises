/*
* A bit of an exploratin into the use of promises
 */


var p = new Promise((resolve, reject)=>{
    /* Do Async task and then... */

    if('successful'){
        resolve('Success!');
    }
    else{
        reject('Failure!');
    }
});


p.then(()=>{
    /* Do something with the result */
}).catch(()=>{
    /* error */
});


var promiseCount = 0;

function testPromise(){
    var thisPromiseCount = ++promiseCount;
    console.log(`${thisPromiseCount} : Started - Async code started`);
    
    var p1 = new Promise((resolve, reject)=>{
        console.log(`${thisPromiseCount} : Promise started - Async code started`);
        /*  This is just used to create asynchronism
            Remember that window is a DOM element and will not run on the back end */
        setTimeout(
            ()=>{
                resolve(thisPromiseCount);
            }, Math.random() * 2000 + 1000);
    });


    p1.then((val)=>{
        console.log(`${val} : Promise fulfilled - Async Code Terminated`);
    }). catch((reason)=>{
        console.log(`Handle rejected promise (${reason}) here.`);
    });

    console.log(`${thisPromiseCount} : Pormise made - Sync Code Terminated`);

}


var myPromise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Promise1 resolved!');
    }),3000;
});

var myPromise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Promise2 resolved!');
    }),1000;
});

var myPromise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('Promise3 resolved!');
    }),4000;
});

Promise.all([myPromise1, myPromise2, myPromise3]).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});

testPromise();
testPromise();
testPromise();