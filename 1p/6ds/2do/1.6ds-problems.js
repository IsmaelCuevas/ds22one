//
// create one file by program
// implement a method, function, non-function solution
// solve each as requested
// may use code from previous exercises
// 

// 1. DS-obj
// a. produce 1e5 random names, ie name35927
// b. add each random name into our ds-obj
// c. measure the time it took
// d. calculate the average of 7 runs

// 2. Map
// a. produce 1e5 random names, ie name35927
// b. add each random name into a Map
// c. measure the time it took
// d. calculate the average of 7 runs

//Objeto Map
let random;
let map = new Map();
for(let i=1; i<10000;i++){
  random = Math.floor(Math.random()*10000+1)
  map.set("name"+random,random)
}
