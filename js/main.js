   // 1)
        // Differnce between let and const keyword?
        var and let create variables that can be reassigned another value.
		const creates "constant" variables that cannot be reassigned another value.
        
       // 2) Which methods are used to avoid Shallow copy?
            spread operator
            object assign
            json stringify json parse

 
 //3) Difference between map and foreach
map():
The map() method returns a new array,
 The map() method is used to transform the elements of array, 
 foreach():
 whereas the forEach() method does not return a new array.
 whereas the forEach() method is used to loop through the elements of an array

// 4) Write the states of promises.
 fulfilled
 rejected
 pending

// 5) Difference between promise chaining and promise all.
 Executes one by one (synchronous). Result of one execution can be passed to the next step. Execution time to fulfill all the promise is comparatively high. Chaining after an error is possible.

//  6) What is the final value of obj.
// const obj = {foo:1}
// obj.bar = 2;
// console.log(obj)

ans:{foo:1,bar:2}

// 7) const speed = "quick";
// console.log(`The ${speed} brown fox jumps over the lazy dog`)

ans:the speed brown fox jumps over the lazy dog

// 8) var obj1 = {
//     id: 1,
//     company: "GFG"
// };
// var obj2 = obj1;
// obj2.id = 2;
// console.log(obj1.id);
// console.log(obj2.id);
output=
        2
        2


// 9) Input : [3,4,5,6]
//     Output : [3,5,7,9]
// How to achieve this output?
const inputArray = [3, 4, 5, 6];
const outputArray = inputArray.map(num => num + 2);
console.log(outputArray);


// 10)using map functio.....

let output=input.map(value,index){
	c= value+index
	return c
}
console.log(output)

// 11)  check all values and return boolean value?
some every 

//12)const price = [35, 66, 234, 56, 88, 90, 22];
// const sorted = price.sort((a, b) => a - b);
// const minimumValue = sorted[0];
// console.log(minimumValue); 

Output: 22



13) ES6 Published in 2015  


//14) var employee =[{
// name : "Karuppasamy",
// age : 24,
// Salary : 25000,
// level : "junior"
// },
// {
// name : "Samy",
// age : 21,
// Salary : 20000,
// level : "junior"
// },{
// name : "Kaviya",
// age : 22,
// Salary : 18000,
// level : "junior"
// },{
// name : "Naresh",
// age : 45,
// Salary : 100000,
// level : "senior"
// },{
// name : "Prem",
// age : 24,
// Salary : 50000,
// level : "senior"
// }];

Output : ["Naresh","Prem"];
const seniorEmployees = employee.map((emp) => emp.level === "senior" ? emp.name : null)

//15) const rem = 0
// console.log(rem++);
// console.log(rem++);
// console.log(rem);

output= 0,1,3,3


//  16) function a(){
// console.log("Hi")

// }

// function b(){
// console.log("Fabevy")
// }
// a(b)
output=hi


//17) armstrong logic in async/await
// let a=parseInt(prompt("Enter The Number"))
// let count=0
// let sum=0
// let b =a
// let c=b

// function amstr(){
// 	return newPromise(k,l)=>{
// 		while(a!=0){
// 			let rem=a%10
// 			a=(a-rem)/10
// 			count++
// 		}
// 		p(count)
// 	}
// }

// function armstrong(count){
// 	return newPromise(m,n)=>{
// 		while(b!=0){
// 			rem=b%10
// 			b=(b-rem)/10
// 			sum=sum+(rem**count)
// 		}
// 		m(sum)
// 	}
// } 

// function check(sum){
// 	return newPromise(t,u)=>{
// 	 	if(c==sum){
// 			t("success")
// 		}
// 		else{
// 			u("not armstrong")
// 		}
// 	}
// }

// async function kal(){
// 	try{
// 		let l=await amstr()
// 		let m=await armstrong(l)
// 		let n=await check(m)
// 		console.log("success")

// 	}

// 	catch{
// 		console.log("err")
// 	}
// }
// kal()




//18) let obj1 = {
// "name" : "Monisha"
// }
// let obj = Object.assign({},obj1);
// obj1.position = "QAE"
// console.log(obj,obj1);


{ name: 'Monisha' } { name: 'Monisha', position: 'QAE' }



// 19)let person = {name: "Linda"}
// const members = [person];
// person = null;
// console.log(person)
    output:null


//  20)  not used async function into sync
 promise
 promise Chaining
 promise all
 async await