const classNumber = 500
//const keyword is used when we don't have to change value at any time or throughout the code
var classIdentity = 3
// var keyword is same as let keyword but nowadays it is not acceptable because we can use var from
// any scope which is not feasible to programmer
let className = "sujal"
// we can use let keyword where we can give any type of data value to let and it has well defined scope
classAttribute = "monitor"
// In java we can assign any variable without giving any let,var and const which is acceptable to javaScript 
if(classIdentity == 3){
    const x = 5
    let y = 6
    // let and const are the block scope variable .block scpe mean it is accessible in that {} not
    // beyond the curly Braces
    var z = 7
    // var is a keyword which can access outside the curly braces
}
let a;//when we make a variable and not assign value to it than it will give you undefined
console.log(a);// undefined

// let b = NULL // we cannot assign the value as null
// console.log(b);//we can't access like this by assign a value as null

console.log([classIdentity,className,classNumber,classAttribute,z,a])
//another way to output some value