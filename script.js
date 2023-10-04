// nn bb ss u;  data types

// N = Number
// N = null
// B = Boolean
// B = BigInt
// S = string 
// S = Symbol
// u = undefined

// let a = null;
// let b = 14;
// let c = "shwdeeta";
// let d = true;
// let e = Symbol("hello guys");
// let f = undefined;
// let g = BigInt("14")+ BigInt("12");
// console.log(a,b,c,d,e,f,g);
// console.log(typeof(d))

// objects

// let items ={
//     "nameu" :"shweta",
//     "age": 22,
//    "mail":"smillushweta@gmail.com"

// }
// items["friend"]="sona"

// items["friend"]="smilly"
// console.log(items);


// create a variable type string amd try to add a number to it.

// let a = "shweta";
// let b = 14;
// console.log(a+b);
// console.log(typeof (b));
// using typeof opretaor to find the data  type  of a

// const dict ={
//     yakka : "hard work",
//     appreciate : "recognize the full worth"
// }
// console.log(dict.yakka)

// expressions amd conditionals

// global scoping

// var global = "global";
// console.log(aa);

// function a(){
//     var aa ="aa";
//     // console.log(global);
// }
// a();

// shadowing and overriding

// var global= "global";

// function a(){
//    var global = "overriding";
//     alert("from function a():" + global)
// }
// a();
// alert("after from function a():" + global); ****variable shadowing****
 
// problem 1

// let a = prompt("Enter a number");
// if(a%2==0){
//     console.log("number is even")
// }
// else{
//     console.log("number is odd")
// };
// problem 2

// let name = prompt("enter a name");
// console.log(`goodmorning ${name}`);

// problem 3

// let p = prompt("enter principle amount");
// let t = prompt("enter time");
// let r = prompt("enter rate");
// console.log("simple interest is: ", (p*t*r)/100);

// problem 4

// let a =prompt("enter 1st no");
// let b = prompt("enter 2nd no");
// if(a>b){
//     console.log(` ${a} is largest number`);
// }
// else{
//     console.log(`${b} is largest number`);
// };

// problem 5

// let r = prompt("enter radius of a circle");
// console.log("area of a circle : ",3.14*r*r);

// problem 6 

// let h = prompt("enter height");
// let b = prompt("enter base");
// console.log("area of a triangle :", 1/2*3*2)


// console.log('shweta ' + 'onkar');
// let isEven = 10%2==0? 'nimber is even':'number is odd';
// console.log(isEven);

// type conversion - 
// implicit conversion
// console.log(6+'3');
// console.log(shweta+'4');
// console.log(3*'5');
// console.log('5'/10);
// console.log(shweta*'2');
// console.log('5'-false);
// explicit conversion - Number, parseInt, parseFloat ,String , tostring()

// console.log(parseFloat('500.23'));
// console.log((500).toString());

// let color = 10;
// switch(color){
//     case 'red':console.log('color is red')
//     break
//     case 'blue':
//         console.log('blue color')
//         break
//         case 'green':
//             console.log('green color')
//             break
//             default:
//                 console.log('not valid')
// }

// for(i=1;i<=10;i++){
//     console.log(i*i)
// }

// let i = 1;
// while(i<=5){
//     console.log(i*i)
//     i++
// }

// function greet(username){  //function parameters
//     console.log('hello dear ' + username)
// }
// greet('shweta'); //function arguements
// greet('smilly');
// greet('babs');

// function sub(a,b){
//   return a-b
// }
// let su = sub(15,5);
// console.log(su);

var b = document.querySelector("#bulb")
var bt = document.querySelector("#btn")
var flag = 0
bt.addEventListener("click",function(){
  if(flag==0){
  b.style.backgroundColor = "yellow"
  console.log("clicked")
  flag = 1
  }
  else{
    b.style.backgroundColor = "transparent"
    console.log("unclicked")
    flag = 0
  }
})















