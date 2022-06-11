//
// create one file by program
// implement a method, function, non-function solution
// solve each as requested
//
// COMPLEXITY

//1. sieve of Eratosthenes
//   sieve(n)
// -> n integer
// <- the n first elements

//2. random number
//   random(n)
// -> n integer
// <- one random number in [1-n]

//numeros primos
let vec=[];
for (let i=2;i<100;i++){
    vec[i]= i;
}
for(let i=0;i<vec.length;i++){
    for(let k=2;k<=vec.length;k++){
    if(vec[i]%k===0 && vec[i]!= k){
        vec.splice(i,1);
    }
}
}
console.log(vec);
