// console.log('aaaaaa!');
// document.write('provaaaa');

// // \\\|\|/?.><,'";:

// let val = 'banana';
// document.write('<br>')
// document.write(val);

// val = null

// let htmlVar = `cose
// altre_cose
// `

// const input = prompt();
// alert(input);

let iter;
console.log(iter);
// // CONFIRM
if(confirm('click ok to reload')){
    console.log('OK');
    window.location.reload();
    if (typeof iter == undefined){
        iter = 0;
    } else {
        iter++;
    }
} else {
    console.log('KO');
}

// inner and outer height
let val;
let val2;
val = window.outerHeight;
// val2 = window.innerHeight;
val2 = window.scrollY;
val = window.location.host;
val2 = window.location.search; // returns the ?x=y&k=z in the address

// navigator object
val = window.navigator;
if (window.navigator.platform == 'Win32'){
    console.log('platform is Win32');
} else {
    console.log('platform is NOT Win32');
}

console.log(val);
console.log(val2);

// redirect. href is the host reference, id i change it i get to another page
// in this case it's github
// window.location.href = 'http://github.com';


