/*
* Exercise 1: 
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Case:
*    Test Case 1: doubleValues([1,2,3]) 
*    Test Case 2: doubleValues([5,1,2,3,10])  
*
* Result: 
* Test Case 1:  [2,4,6]
* Test Case 2: [10,2,4,6,20]
*
*
*/
// function doubleValues(arr){
//     //Your Code Here
//     arr.forEach((item, index, arr) =>{
//         arr[index] = item * 2;
//     })
//     return arr
//  }
//  console.log(doubleValues([1,2,3]))


 /////////////////////////////////////////////////
//  * Exercise 2:
//  * Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
//  *
//  * Test Cases:
//  *   onlyEvenValues([1,2,3]) 
//  *   onlyEvenValues([5,1,2,3,10]) 
//  * 
//  * Result:
//  *  Test Case 1:  [2]
//  *  Test Case 2: [2,10]
//  */
//  function onlyEvenValues(arr){
//      //Your Code Here
//      let newArr = []
//      arr.forEach((item, index, arr) =>{
//         if(item % 2 == 0){
//             newArr.push(item)
//         }
//     })
//     return newArr
//  }
 
//  console.log(onlyEvenValues([1,2,3]))
//  console.log(onlyEvenValues([5,1,2,3,10]))


/////////////////////////////////////////////////////
// * Exercise 4:
//  * Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed 
//  * to the function with the new key and value added for each object 
//  * 
//  * Test Cases:
//  *   Test Case :addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
//  *   
//  * Result:
//  *   [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
//  *
//  */
//  function addKeyAndValue(arr,title,value){
//      //Your Code Here
//      let newArr = []
//      arr.forEach(item =>{
//         let fin = {name: item.name , title: value }
//         newArr.push(fin)

//     })
        
//      return newArr
//  }

//  console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'))