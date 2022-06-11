//
// create one file by program
// implement a method, function, non-function solution
// solve each as requested
// may use code from previous exercises
//
// SORTING


//1. bubblesort
//   sort(d)
// -> d an array of random numbers
// <- the random numbers sorted

//2. selectionsort
//   sort(d)
// -> d an array of random numbers
// <- the random numbers sorted

// forEach
// + verify is sorted
//
// + print
// - time it took
// - steps it tooks

//Arreglos ordenados
let contador=0, a = [1,2,4,5,6,7];

for (let i=0; i<a.length-1;i++){
  if(a[i]<a[i+1])
    contador+=1;
  else{
    console.log("No Ordenado")
    break;
  }
}
    if(contador==5)
    console.log("Ordenado")
