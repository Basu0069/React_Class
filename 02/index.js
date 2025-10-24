// ONe way of using for loop 

// let result = [];
// let nums = [2, 6, 8, 10, 11, 14, 21, 27];

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] % 2 === 0) {
//     nums[i] = nums[i] + 2;
//     result.push(nums[i]);
//   } else {
//     nums[i] = nums[i] + 5;
//     result.push(nums[i]);
//   }
// }

// console.log(result);












// Second way of doing Foreach methid 

// let result = [];
// let nums = [2, 6, 8, 10, 11, 14, 21, 27];

// nums.forEach((number, index) => {
//   if (index % 2 === 0) {
//     result.push(number + 2);
//   } else {
//     result.push(number + 5);
//   }
// });

// console.log(result);













// check 

// let result=[];
// let nums = [2,6,8,10,11,14,21,27];



//let result = nums.find(x => x==2) 
// let result= nums.find(2);
// console.log(result);













// let value = "welcome";
// let result = Array.from(value);
// console.log(result);








// index of 
// let nums = [2, 6, 8, 10, 11, 14, 21, 27];

// let result = nums.indexOf(10);

// console.log(result);





// map fiunction 
// let fruits = ["mango", "apple", "banana"];

// fruits.map((x, y) => console.log(x, y));






// let nums = [8, 12, 18, 28, 34, 62, 128, 218, 512, 810];

// nums.map((num, index) => {
//   console.log(`Index: ${index}, Value: ${num}`);
// });



// let sum = 0;
// nums.forEach(num => sum += num);
// console.log(sum);




// another method using reduce 
// it will take 2 argument first function adn second argument 
// nums.reduce(() =>{ }, 0)





// let sum = nums.reduce((total, num) => total + num, 0);
// console.log(sum);





// Reverse Function 
// let nums = [8, 12, 18, 28, 34, 62, 128, 218, 512, 810];

// nums.reverse();
// console.log(nums);











// // Spread funtion 
// let nums = [8, 12, 18, 28, 34, 62, 128, 218, 512, 810];
// let fruits = ["mango", "apple", "banana"];

// console.log(fruits,nums);
// console.log(...fruits,...nums);




// Destruct 
let fruits = ["mango", "apple", "banana"];
let [a,b,c] = fruits 
console.log(a,b,c);






















