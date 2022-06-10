// import { Users } from "./users";

// setTimeout(()=>{
//     console.log("hey")
// }, 3000)

//map array method: returns values for each element in the array basing on the callback function   - uses the arithmetic operators
// const numbers = [1,2,3,4,5,6,7,8,9,0]

// const doubled = numbers.map(n => n * 2);

// console.log(doubled);

//filter array: does something based on a condition - method-uses comparison operator && logical operators
// const numbers2 = [1,2,3,4,5,6,7,8,9,0]
// const filtered = numbers2.filter(n => n < 9 && n % 2 === 0 && n !== 0);
// console.log(filtered)



// find arrray method: best used to find a unique id from an array
// const numbers3 = [1,3,4,5,6,7,8,9,0]
// const found = numbers3.find(n => n === 7);
//  console.log(found)


//reduce array method 
// const numbers4 = [1,2,3,4,5,6,7,8,9,0]
// const reduce = numbers4.reduce((acc, current) =>{
//     acc = acc + current;
//     return acc
// }, 0)
//  console.log(reduce)

// const reducer = Users.reduce((acc, current) =>{
//     if (acc[current.first_name]){
//         acc[current.last].push(current);
//     }else{
//         acc[current.first_name] = current;
//     }

//     return acc;
// }, {})

// console.log(reducer)

// for (let i = 0; i <= 3; i++) {
//     setTimeout(function() { console.log(i); }, 1000 + i);
//   }

// function logger(){
//     console.log("And last but not least, This is being read asnychronously");
// }

// const interval = setInterval(logger, 1000)
// console.log("hey");
// console.log("am Collins");
// console.log("And this is being read synchronously");

// setTimeout(()=>{
//   clearInterval(interval)
// }, 6000)


// call method: allows for calling of a method with an owner object as an argument (parameter).

// const person = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }
// const person2 = {
//   firstName:"Mary",
//   lastName: "Doe"
// }

// // This will return "John Doe":
// console.log(person.fullName.call(person2));


//async && await

// async function foo() {
//   const result1 = await new Promise((resolve) => setTimeout(() => resolve(console.log('result1')), 2000 ))
//   const result2 = await new Promise((resolve) => setTimeout(() => resolve('2')))
// }
// foo()


// let promise1 = function promise(){
//   return new Promise((resolve, reject)=>{
//     if(true){
//       resolve(console.log("true"))
//     }else{
//       reject((console.log("reject")))
//     }
//   })
//   .then(()=>{
//     console.log("unha")
//   })
//   .then(()=>{
//     console.log("it worked")
//   })
// }

// console.log(promise1())

// console.log("ha")

// // null is an unknown value
// console.log(typeof null)
// //undefined is a variable that has been declared but has not been initaialized
// let a;
// console.log(a)
// console.log(typeof undefined)

// console.log(null == undefined) // true
// console.log(null === undefined) // false




// function async(){
//     return new Promise((resolve, reject)=>{
//      if(true){
//              resolve(console.log("okay"))
//         }else{
//             reject ((console.error(err)))
//         }
//     }).then(()=>{
//         console.log("Its going well")
//     }).catch(()=>{
//         console.error("error")
//     }).finally(()=>{
//         console.log("Till the end")
//     })
// }

// async();

// let array = [[1, 2, 3,[7,8,0], 4, 5, 6, 7, 8, 9],
// [8,9,3,4,1,5,2,7,4],
// [1, 2, 3, [4, 5, 6] ,8,9,0,4]
// ]

// let newarray = [];
// //concat array method to join arrays together
// let concat = newarray.concat(...array)
// //flat array method to flatten an array
// console.log(array.flat(2))



//constructor function to create objects
// function student(name, age){
//     this.name = name
//     this.age = age
// }

// const _student = new student("Lubwama", 21) 
// console.log(_student)




// constructoe function
// function mal(name, age, location){
//     this.name = name
//     this.age = age
//     this.loaction = location
// }

// const malcom = new mal("Malcom", 21, "kansanga")

// console.log(malcom)



// prototypal inheritance
// function Bear(type){
//     this.type = type
// }

// Bear.prototype.growl = function(){
//     console.log("the " + this.type + " says grr")
// }

// const Grizzly = new Bear("Grizzly")
// const Polar = new Bear("Polar")

// console.log(Grizzly, Polar)
// console.log(Grizzly.growl(), Polar.growl())




// function promise(){
//     return new Promise((resolve, reject)=>{
//         if(true){
//             resolve(console.log("unha"))
//         }
//     }).then(()=>{
//         console.log("it worked")
//     }).catch((err)=>{
// console.error(err)
//     })
// }

// promise();


// async await
// async function f() {

//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve("done!"), 1000)
//     });
  
//     let result = await promise; // wait until the promise resolves (*)
  
//     console.log(result); // "done!"

  
//   f();


// looping through objects 


// using object.keys({object whose keys you'd like})
// const courses = {
//     java: 10,

//     javascript: 55,

//     nodejs: 5,

//     php: 15
// };

// const keys = Object.keys(courses);

// console.log(keys)

// keys.forEach((key, index) => {
//     console.log(`${key}: ${courses[key]}`);

// });



// let crawler = [
//     [
//         {
//             key : "yui"

//         },
//         {
//             man : "toy"
//         }
//     ],
//     [
//          {
//             key : "8900"

//         },
//         {
//             man : "yuhgbh"
//         }
//     ]
// ]



module.exports.a = 'A';
exports.b = 'B';


console.log(module)







































