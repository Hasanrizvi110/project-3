// Create an array and then use the length property to add an element to its end:
// let arr = [1,2,3]
// let new_arr = new Array(arr.length)
// let final_arr =  new_arr.push(arr)
// const bothArray = arr.concat(final_arr);
// console.log(final_arr);
// console.log(new_arr);
// console.log(bothArray);
// let arr = [1, 2, 3];  // Create an array
// arr[arr.length] = 4;  // Use the length property to add an element to the end
// console.log(arr); // Expected output: [1, 2, 3, 4]
// arr[arr.length] = 5;  // Use the length property to add an element to the end
// console.log(arr); // Expected output: [1, 2, 3, 4]

// 2. Array Methods (Map, Filter, Reduce) Questions:
// Use map to create an array that stores the square of each number from [1, 2, 3, 4, 5].
// array.map(function(currentValue, index, arr), thisValue)
// let create_arr = [1, 2, 3, 4, 5];
// let resultArr1 = create_arr.map((x) => x * x);
// console.log(resultArr1);
// let create_arr2 = [4, 9, 16, 25];
// let resultArr2 = create_arr2.map(Math.sqrt);
// console.log(resultArr2);

// Description
// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.
// Syntax
// array.filter(function(currentValue, index, arr), thisValue)
// Use filter to create a new array containing only even numbers from [5, 12, 8, 130, 44].
// const givenArray = [5, 12, 8, 130, 44]
// const newArray = givenArray.filter(checkEven);
// function checkEven (x){
// if(x%2==0){
//     return true;
// }
// else{
//     return false;
// }
// }
// console.log(newArray);

// Write a function that uses reduce to calculate the product of all elements in [1, 2, 3, 4].

// Syntax
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// let proArray = [1, 2, 3, 4]
// let newProArray = proArray.reduce((x,y)=>{return `${x} "x" ${y} "="`, x*y } )
// console.log(newProArray);

// 4. Array Transformation and Restructuring:
// Write a function that takes an array and returns a new array with all elements doubled.
// let array = [2,3,4,5,6,7]
// let arrayDouble = array.map((x)=>{return x*2})
// console.log(arrayDouble);

// Given ["apple", "banana", "apple", "orange", "banana"], write code to create an array with unique values.
// let stringArr = ["apple", "banana", "apple", "orange", "banana"]


// let getUniqueArr = ((array)=>{
//    let uniqueArray = []
//    for(let i=0; i<stringArr.length;i++)
//    if(!uniqueArray.includes(array[i])){
//     uniqueArray.push(array[i])

    
//    }
//    return uniqueArray
// })(stringArr);
// console.log(getUniqueArr);

// Write a function to merge two arrays and remove duplicate values.
// let arr1 = [1,2,3,4,5]
// let arr2 = [2,6,3,7,5]
// let getMergeArr =( (arr1)=>{
//     for(let i=0; i<arr1.length;i++)
//         if(!arr2.includes(arr1[i])){
//          arr2.push(arr1[i])
     
// }
// return arr2
// })(arr1);

// console.log(getMergeArr);

// Given an array ["John", "Jane", "Mary"], create a function to join all elements into a single string separated by -.
// let arr3 = ["John", "Jane", "Mary"]
// let str3 = ""
// let joinString = ((arr3)=>{
// for(let i = 0; i<arr3.length; i++){
//     str3=str3+(arr3[i])
//        // Add "-" if it's not the last element
//        if (i < arr3.length - 1) {
//         str3 = str3 + "-";
//       }
// }
// return str3
// })(arr3)

// console.log(joinString);


// Gpt solution :
// 

// Write a function to split an array of numbers into two arrays: one with even numbers and another with odd numbers.
// let evenOddArr = [2,3,4,5,6,7,8,9]
// let evenArr = []
// let oddArr =[] 
// let  {arr1,arr2} =( ()=>{
//     for(let i=0; i<evenOddArr.length; i++){
//         if(evenOddArr[i]%2==0){
//             evenArr.push(evenOddArr[i])
//         }
//           else{
//             oddArr.push(evenOddArr[i])
//           } 
//     }
//     return(evenArr,oddArr)
// })(evenOddArr)
// const separate  = evenOddArr. slice(0, evenOddArr. length / 2);
// const separate2 = evenOddArr.slice(evenOddArr.length / 2, evenOddArr.length);
// console.log(arr2);
// console.log(arr1);


// Higher-Order Array Operations
// Write a function that accepts an array of numbers and returns an array with each number cubed, but only for numbers greater than 10.
// let Num_Arr = [2,11,15,5,16,7,12,9]
// let get_greater_10 = Num_Arr.filter((arr)=> {if(arr>10){ return arr}})
// console.log(get_greater_10);
// let get_cube_array = get_greater_10.map((arr5)=>{return arr5**3})
//     console.log(get_cube_array);
    
// Given an array of objects representing users, each with a name and age, write code to find all users older than 18.    
// const users_arr_obj = [
//     {name:"Masoon Bro",
//      age: 22
//     },
//     {name:"Jawad Bro",
//      age:18   
//     },
//     {name:"Asghar Ali",
//     age:20
//     },
// ]
// let find_user_older_18 = users_arr_obj.filter((userProperties)=>{if(userProperties.age>18){return userProperties.age}})
//     console.log(find_user_older_18);
//     let get_age_older_18 = find_user_older_18.map((user_obj)=>{return user_obj.age})
//     console.log(get_age_older_18);


// let find_user_older_18 = (((users_arr)=>{
//     let filterage =[];
//     for(let i = 0; i<users_arr.length;i++){
       
//         if(users_arr[i].age>18){
      
//             filterage.push(users_arr[i].age);   
//         }
     
//     }
//     return filterage
// } ))(users_arr_obj);

// console.log(find_user_older_18);


// Write a function that takes an array of numbers and returns an array of boolean values indicating if each number is prime.

// let nums_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Function to check if a number is prime
// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// Use map to apply isPrime to each element in the array
// let get_PrimeNums = nums_arr.map((Eachvalue) => isPrime(Eachvalue));

// console.log(get_PrimeNums);
    

// function isPrime(n) {
//     if (n <= 1) return false;  // 0, 1, and negative numbers are not prime
//     if (n === 2) return true;  // 2 is the only even prime number
//     if (n % 2 === 0) return false; // Any other even number is not prime
  
//     for (let i = 3; i <= n / 2; i++) {
//       if (n % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   // Testing the function
//   console.log(isPrime(11)); // true
//   console.log(isPrime(15)); // false
  

  // const numbers_Array = [1,2,-3,4-5,6,7,8,-9]
  // let get_positive_Nums = []
  //  numbers_Array.every((element) => { if(element<0){return get_positive_Nums.push(element)} else{return true} })
  //   console.log(get_positive_Nums);
    