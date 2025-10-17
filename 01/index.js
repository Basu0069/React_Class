// Concat() -> []
// Every()-> Boolean return 
// filter()->[]
// All three return in a new array 
// push,pop,shift,unshift 


// split c " _ _ _ ", arrayName.split("_");






// let family = new Array("Basu", "Akash", "Daksh");
// let cousins = ["Abhinav", 25];
// let friends = ["Satyam"];

// let allMembers = family.concat(cousins, friends);

// console.log(allMembers);






// let nums = ["Sargeet","Ayush","mathew"];
// console.log(nums[1]);
// nums.push("Jaber"); // new elemetnt in the end 
// nums.unshift("noah"); // new element in the begining 

// nums.pop()
// nums.shift()



// let Quote = "welcome to lovely professional university";
// let value = Quote.split(" ");
// console.log(value);


// let data =["Ayush","and", "sarjit", "and", "shanaya","are","friends"];

// let result = data.join(" ");
// console.log(result);



// let values = [2,4,8,10,16,24];
// let result = values.every(x =>  x%2 ==0 )
// console.log(result);



let data = [{
    name : "ayush",
    Class : "K23PR",
    CGPA : 8
},
{
    name:"Basu",
    Class:"K23BR",
    CGPA: 10
}];


let toppers = (data.filter(x => x.CGPA >8));
console.log(toppers);








