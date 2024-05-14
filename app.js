var student = {
    name : "Ubaid",
    subject : "Coding",
    batch : "11",
    marks : "77",
    calculatorFees : () => {
        console.log("Hello, Guys");
    }
}
console.log("Student name :", student.name);
console.log("Student name :", student["name"]); //Dynamicali access krne k liye

student.calculatorFees()

let country = "country";
let value  = "Pakistan";

student[country] = value;
console.log(student);





// my() => {
//     console.log("hello, Guy")
// }
// my();


// firstclass citizen in javascript.

// var,boolean,number,array,object,function ye sare (first class) h.
// kisi chiz m ye 3 bataen hen toh wo (first class) h ?
// 1) kisi var m store ho sake
// 2) kisi function m pass ho sake
// 3) kisi function se return ho sake





