// 1. var vs let vs const
                        // var         let         const
// re-declaration        Y              N           N
// re-assignment         Y              Y           N

// var - function scope
// let and const - block scope

// let a = 2;
// console.log(a);     //1- 2

// function one() {
//     let b = 4;
//     console.log(a);     //2- 2
//     console.log(b);     //3- 4
// }
// one();

// console.log(b);         //4- error

// if(true) {
//     let c = 6;
//     console.log(a);     //5- 2
//     console.log(b);     //6- error
//     console.log(c);     //7- 6
// }

// console.log(c);         //8- error

// function two() {
//     if(true) {
//         let d = 8;
//         console.log(d);     //9- 8
//     }
//     console.log(d);         //10- error
// } 
// two();

// console.log(d);     //11- error





                // global           // function        //block
                // ------           --------        --------
// var             global           function        parent function or global
// let             global           function        block
// const           global          function        block






// 2. scopes
    // from where you can access the variables
    // - global scope
    // - local scope
    // - block scope
    // - module scope

    // var x = 5;

    // function one() {
    //     var y = 10;
    // }

    // if(true) {
    //     var z = 15;
    // }






// 3. functions in js
    // - traditional functions
    // - function expression


// traditional functions
// function sum(n1, n2) {          //parameters
//     return n1+n2;
// }

// var res = sum(5, 4);              //arguments
// console.log(res);


// function expression (annonymous function)
// var sum = function(n1, n2) {
//     return n1 + n2;
// }

// var res = sum(9, 2);
// console.log(res);

// arrow function   (function expression) (annonymous function)
// var sum = (n1, n2) => {        
//     return n1+n2;
// }

// var res = sum(5, 4);
// console.log(res);

// for just one line in fun body, no need of {}
// if that line is return statement, don't write return keyword
// if there is only one parameter, no need of ()






// 4. execution context

// container where js code gets run

// types of ec
    // 1. global ec
    // 2. local ec

// when you run any js file, global ec is created
// for every function call, an local ec is created

// there are 2 componenets of ec
    // 1. memory
    // 2. code

// ec is created in 2 phases
    // 1. memory allocation phase
    // 2. code execution phase


console.log(a);     //1- undefined      done
one();              //2- hello          done
console.log(one);   //3- fn             done
console.log(b);     //4- error - not defined         done

var a = 5;          //5                 done

console.log(a);     //6- 5              done

function one() {
    console.log("hello");   //one 1
}

/*
memory                                   code
-----                                    ----
a: 5                                    1- co(a)

one: fn{..}                             2- one()
                                        M       C
                                                one 1

                                        3- co(one)

                                        4- co(b)

                                        5- a=5

                                        6- co(a)
*/


// console
// -------
// undefined
// hello
// fn one {...}
// error
// 5

// 6. hoisting
// accessing variables and functions before declaration



