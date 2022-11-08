1// Correct the syntax error


//  numbers=[ 1,7 , 9 , 45 ]

//  names=["Str", "alex","moh"]

//  doges=['the','fox', 'over', `lazy`, 'dog']








 
2// What the index of "Banana","Tomato"


// var fruits=["Tomato","Banana","Watermelon"]

// fruits.indexOf("Tomato");
// fruits.indexOf("Banana");
// console.log(fruits.indexOf("Tomato"));
// console.log(fruits.indexOf("Banana"));








3// Create an array represents your:


// favorite={
//     Food:[`Rice`,`Fish`,`Steak`,`Sandwich`,`Salad`],
//     sport:[`cricket`,`football`,`tennis`],
//     movie:[`Chennai Express`,`Kabhi Khushi Kabhie Gham...
//     `,`3 Idiots`,`Gangubai Kathiawadi`],
//     };







   
    4 // Create a function called firstOfArray 
//     that take an array as a parameter
// and return the first element in an array



// function firstOfArray (array){
//   return array[0]
// }

// console.log(firstOfArray(favArray));








5  // 
// Create a function called lastOfArray
// that take an array as a parameter
// and return the first element in an array


// function lastOfArray (array){
//   return array[ array.length - 1]
// }

// console.log(lastOfArray([1, 2, 3 ,4 ,6]));









6  // 
// Using console make this array to be like this one (push, unshift, shift, pop)
// var array = [0,5,7,9];

// array.shift([0]);
// array.shift([1]);
// array.shift([2]);
// array.push(10);
// array.unshift(1,3,4,6,8);
// console.log(array);





7 
 // Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

// var array2 = [5,9,-7,3.5]



// var array2 = [5 , 9 ,-7 , 3.5 ];

// console.log(array2.push(200));
// console.log(array2);
// console.log(array2.unshift(100));
// console.log(array2);
// console.log(array2.pop());
// console.log(array2);
// console.log(array2.shift());
// console.log(array2);



8  /*

Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/



// function middleOfArray (array) {
//   if ( array.length % 2 == 0){
//     return array.splice(array.length/2 - 1 , array.length/2 )
//   }
//   else {
//     return array[Math.floor(array.length/2)]
//   }
// }

// console.log(middleOfArray(["t","u","x"]));



10
/*

Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/


// function indexOfArray (array , index) {
//   return array[index]
// }
// console.log(indexOfArray(animals , 2));








12/*

Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/

// var nums= [1,2,3,8,9]

// function addToEnd (array, value){
//   array.push(value);
//   return array
// }
// console.log(addToEnd(nums,55));
