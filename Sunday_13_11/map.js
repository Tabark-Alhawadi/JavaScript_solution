/*
Instructions: 
 - You should solve all these questions using .map() function 
*/


/*
 * Exercise 1: 
 * 
 * Make an array of numbers that are doubles of the first array
 *
 * Test Case: 
 *
 * console.log(doubleNumbers([2, 5, 100]));
 * 
 * Result:
 * [4, 10, 200]
*/


// function doubleNumbers(arr){
//     // your code here
//   let result= arr.map((element)=>element*2)
//   console.log(result);
//   }

//   doubleNumbers([2,5,100]);
  

//////////////////////////////////////////////////////////////////
/*
 * Exercise 2 : 
 * 
 * Take an array of numbers and make them strings
 *
 * Test Case: 
 *
 * console.log(stringItUp([2, 5, 100]));
 * 
 * Result:
 * ["2", "5", "100"]
*/

// function stringItUp(arr){
//   // your code here
// let result = arr.map((ele)=>`${ele}`)
// return result
// }
// console.log(stringItUp([2,5,100]));


//////////////////////////////////////////////////////////////////
/*
 * Exercise 3:  
 * 
 * Capitalize each of an array of names
 *
 * Test Case: 
 *
 * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
 * 
 * Result:
 *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
*/

// function capitalizeNames(arr){
//   // your code here
//   let result = arr.map(ele => ele[0].toUpperCase() + ele.slice(1).toLowerCase())
//     return result
// }
// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));


///////////////////////////////////////////////////////////
/*
   * Exercise 5:  
   * 
   * Make an array of strings of the names saying whether or not they can go to The Matrix
   *
   * Test Case: 
   *
   * console.log(makeStrings([
   *    {
   *       name: "Angelina Jolie",
   *       age: 80
   *   },
   *   {
   *       name: "Eric Jones",
   *       age: 2
   *   },
   *   {
   *       name: "Paris Hilton",
   *       age: 5
   *   },
   *   {
   *       name: "Kayne West",
   *       age: 16
   *   },
   *   {
   *       name: "Bob Ziroll",
   *       age: 100
   *   }
   * ]));  
   * 
   * Result:
   * 
   * ["Angelina Jolie can go to The Matrix", 
   * "Eric Jones is under age!!", 
   * "Paris Hilton is under age!!", 
   * "Kayne West is under age!!", 
   * "Bob Ziroll can go to The Matrix"]
   *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
   */
  
//   function makeStrings(arr){
//     // your code here
//     let result = arr.map(e => {
//         if(e.age > 17){
//             return e.name  + "can go to The Matrix"
//         }else{
//             return e.name + "is under age!!"
//         }
//     })
//     return result;
//   }

//     console.log(makeStrings([
//        {
//            name: "Angelina Jolie",
//            age: 80
//        },
//        {
//            name: "Eric Jones",
//            age: 2
//        },
//        {
//            name: "Paris Hilton",
//            age: 5
//        },
//        {
//            name: "Kayne West",
//            age: 16
//        },
//        {
//            name: "Bob Ziroll",
//            age: 100
//        }
//        ]));