// filter
// ----------------------
// to create a new array by filtering elements from an existing array that meet certain condition

// it takes a callback function as an argument that returns a boolean for each element

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let res = numbers.filter((num) => {
//     return num > 5;
// });

// let res = numbers.filter(num => num > 5);

// console.log(numbers);
// console.log(res);




// map
// ----------------
// to create a new array by applying a function to each element of the original array

// returns a new array of same length as the original array

// let numbers = [1, 2, 3, 4, 5];

// let res = numbers.map((num) => {
//     return num*num;
// })

// console.log(numbers);
// console.log(res);




// reduce
// -------------------
// to reduce an array to a single value

// it takes a callback function that accumulates the values and an initial value

// let numbers = [1, 2, 3, 4, 5];

// let sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator = accumulator + currentValue;     
// }, 0);      //initial value of accumulator

// console.log(sum);




// object literal
// --------------------
// to create an object with key-value pairs
// collections of key-value pairs

// let person = {
//     firstName: "Jay",
//     lastName: "Abhani",
//     age: 25,
//     isStudent: true,
//     1: "one",
// }

// console.log(person);
// console.log(person.firstName);
// console.log(person.age);

// let x = "age";

// console.log(person["firstName"]);
// console.log(person[x]);
// console.log(person.x);
// console.log(person.1);   //error
// console.log(person[1]);

// let arr = [5, 10, 15];
// 0: 5
// 1: 10
// 2: 15

// arr[0]
// arr[1]



// destructuring
// -----------------------------

// to extract values from an object or an array into distinct variables

// array destructuring
// let colors = ["red", "green", "blue"];

// let color1 = colors[0];
// let color2 = colors[1];
// let color3 = colors[2];

// let [color1, color2, color3] = colors;
// let [color1, , color3] = colors;

// console.log(color1);
// console.log(color2);
// console.log(color3);



// object destructuring
// const person = {
//     firstName: "Jay",
//     lastName: "Abhani",
//     age: 25,
//     isStudent: true,
// }

// let firstName = person.firstName;
// let lastName = person.lastName;
// let age = person.age;
// let isStudent = person.isStudent;

// let {firstName, lastName, age, isStudent} = person;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(isStudent);





// spread operator (...)
// -------------------------

// to split an array or object into individal elements

// array spread
// let fruits = ["apple", "banana"];
// let moreFruits = ["orange", "mango"];

// let allFruits = [...fruits, ...moreFruits];
// console.log(allFruits);


// object spread
// const person = {
//     firstName: "Jay",
//     lastName: "Abhani"
// }

// const details = {
//     age: 25,
//     isStudent: true
// }

// const completePerson = {
//     ...person,
//     ...details
// }

// console.log(completePerson);


// creating a new object from an existing object
// let person = {
//     firstName: "jay",
//     lastName: "abhani"
// }

// let person2 = person;
// let person2 = {...person};

// person.firstName = "neha";

// console.log(person.firstName);      //neha
// console.log(person2.firstName);     //jay





// rest operator (...)
// ----------------------------

// to collect multiple elements into a single array or object

// function sum(...numbers) {          //numbers = [5, 3, 2, 4, 6, 9, 20, 31];
//     return numbers.reduce((accumulator, currentValue) => {
//         return accumulator += currentValue
//     })
// }

// console.log(sum(5, 3, 2, 4, 6, 9, 20, 31, 2, 1));





// template string (template literal)

// let firstName = "Jay";
// let lastName = "Abhani";
// let age = 25;

// console.log("hello everyone! good morning.. my first name is " + firstName + ". my last name is " + lastName + ". my age is " + age + ".");

// console.log(`hello everyone! good morning.. my first name is ${firstName}. my last name is ${lastName}. my age is ${age}.`);





// classes and objects
// ----------------------------

class Person {
    constructor(firstName, lastName, age, isStudent) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isStudent = isStudent;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }   
}

let person1 = new Person("jay", "abhani", 25, true);
let person2 = new Person("neha", "shah", 23, false);

console.log(person1.getFullName());
console.log(person2.getFullName());










// re-assignment of const
// const person = {
//     firstName: "Jay",
//     lastName: "Abhani",
//     age: 25,
//     isStudent: true,
// }


// person.firstName = "neha";

// console.log(person);