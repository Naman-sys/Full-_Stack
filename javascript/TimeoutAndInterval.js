// var c=0;
// setInterval(()=>{
//     c++;
//     console.log(c+" seconds have passed");
// }, 1000);

// wap to create a timer for 15min using setIntervall and setTimeout.Display the passing time..
let c = 0;

let timer = setInterval(() => {
    c++;
    console.log(c + " seconds passed");
}, 1000);

setTimeout(() => {
    clearInterval(timer);
    console.log("15 minutes completed. Timer stopped.");
}, 120000);