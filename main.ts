//union operater or pip  multiple type aline
// let dob:string | number | boolean = true

// type stringOrNumber = string |  number;
// let dob: string | number;
// let address: stringOrNumber;

// // what is the best way to define multiple type of variable? // b
// // multiple type of single variable //a
// a: string | number
// b: type stringOrNumber = string | number
// c: both
// d: non of them

// type Student = {
//     name: string;
//     isStudent: boolean;
//     rollNo: number;
// }
// let studentObj: Student = {
//     name: "Bisma",
//     isStudent: true,
// }
// console.log(studentObj)

//what is the output of student object? // c
// a: error
// b: object
// c: type error
// d: non of the above

// type Student = {
//     name: string;
//     isStudent: boolean;
//     rollNo?: number;
// }
// let studentObj: Student = {
//     name: "Bisma",
//     isStudent: true,
// }
// console.log(studentObj)

//what is the output of this question? // b
// a: error
// b: object
// c: type error
// d: non of the above

//type intersection
// type Student = {
//     name: string;
//     isStudent: boolean;
//     rollNo: number;
// };
// type userInfo = {
//     email: number;
//     pasward: number;
//     address: string;
// }

// {name: string, email: string} 
// //what is this type? //b
// a: object
// b: error
// c: type
// d: null

// type Object = {name: string, email: string} 
// //what is this type? //c
// a: object
// b: error
// c: type
// d: null

// let user: {name: string, email: string}  = {name: "bisma" , email: "xyz"} 
// //what is the type of this variable? //a
// a: object
// b: error
// c: type
// d: null

//Functions
//what is the name of this function? // a or d
// function hello() {
// }

// a: normal
// b: arrow
// c: anonymous
// d named function

//what is the name of this function? //c
// function () {
// }

// a: normal
// b: error
// c: anonymous
// d named function
//what is  the out put of function? //undefined
// function hello() {
// }
// console.log(hello());

//which typeof function is this? // arrow / lamba function
//let sayHello() => {};

// let sayHello = function() {}; //anonymous ko variable a  assign kia hy
// function() {}; //anonymous

//what is the type of return undefined
//let userName; //undefined

//fuvction kuch return na kary tu undefined or undefined kuch return na kary tu void ai ga or ager name return kary ga tu string reurn kary ga
// let sayHello = ():void => {
//     let abc = "Bisma"
// }

//rest parameters array ki form ma aty hy or array return kerty hy
// let helloWorld = (a: string, b: string, ...rest) => {
//     console.log(a, "a");
//     console.log(b, "b");
//     console.log(rest[0]);
// }
// helloWorld("Bisma", "Memon", "Khanzadi", "Wazir Ali")

// let helloWorld = (...rest) => {
//     console.log(rest[2]);
// }
// helloWorld("Bisma", "Memon", "Khanzadi", "Wazir Ali")

// let helloWorld = (...rest) => {
    
//     return rest
// }
// console.log(helloWorld("Bisma", "Memon", "Khanzadi", "Wazir Ali"));

// Login => 1
// Logout => 0
// Idle => 2

//Enums constant hoti hy poperty or abjrct ki property change hoti hy //camal case ma decleare hota hy
// enum UserStatus {
//     LOGIN = 1,
//     LOGOUT = 0,
//     IDLE = 2,
// }
// console.log(UserStatus.LOGIN);

// enum kud sa number assign kerta hy 0 sy ager ham values na dy
//what isthe value og logout? //1
// enum UserStatus {
//         LOGIN , //0
//         LOGOUT, //1
//     }
//     console.log(UserStatus.LOGIN);