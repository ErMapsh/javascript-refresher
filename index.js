/*
//multiline comment
document.write("this is a document write")//devloper dont recommend this
console.clear() // u can clear js console like as in cmd  
*/

// 1. ----ways to print in console----
// document is ur html webpage , that  server to client
// console.log("hello world", 10-2, "this is another ");
// console.warn("this is fucking word")
// ----u can also change css , html using following method.------ 
// document.getElementById('text').innerHTML = '<p><b> this is a normal text paragraph , after using js method ---- You are bold now </b></p>'
// document.getElementsByTagName('h1')//if u want get element by tag then use that, but return all tag in one array
// document.getElementById('but').style.visibility = "hidden"


// 2. ---another stuff---
// alert("Hello Gamerz");
// prompt("are u vergin?");
// console.error("this is error")// u can implement error if u wnat


//3 . ---javascript variable--
// variable = Container to store value
var no1 = 43;
var no2 = 'ErMapsh';
// console.log(no2 * no1); 
let no3 = "this is like variable";
const no4 = 'variable value never change';



//4. -------------------data types in javascript--------------------------------
const integer = 3;
var float = 3.42;
var stirng = 'this is in string ';
let object_Of_mahesh = {
    name: 'ErMapsh',
    age: 21
}
// console.log(object_Of_mahesh.name)
var bolean_t = true;
var bolean_f = false;
// console.log(bolean_t, bolean_f)

var undefined_V = undefined;
// var undefined_V;

var NULL_v = null;

/*
At a very high level, there are two types of data types in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and Objects
*/

var arr = [2, 343, 2, 412, 4123, -55, 'string'];



//Operator in javascript

// Arithmetic Operators
var a = 100;
var b = 10;
// console.log("The value of a + b is ", a+b);
// console.log("The value of a - b is ", a-b);
// console.log("The value of a * b is ", a*b);
// console.log("The value of a / b is ", a/b);


// Assignment Operators
var c = b;
// c += 2;
// c -= 2; // c = c - 2;
// c *= 2;
// c /= 2;
// console.log(c);


// Comparison Operators
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical Operators return in boolean 
// 1.Logical and
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)
// 2.Logical or
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)
// 3. Logical not
// console.log(!false);
// console.log(!true);






//--------------------Functions--Do not repeat yourself
function avg(a, b) {
    return (a + b) / 2;
}
a1 = avg(3, 3);
a2 = avg(13, 34);
// console.log(a1, a2);




//conditional in js
var age = 33;
// Single if statement
// if(age > 18){
//     console.log('You can drink rasna water');
// }


// if - else statement
// if(age > 18){
//     console.log('You can drink rasna water');
// }
// else{
//     console.log('You cannot drink rasna water');
// }


// if-else Ladder
/*
var age = 54
if(age > 32){
    console.log("You are not a kid");
}
else if(age >26){
    console.log("Bachhe nahi rahe");
}
else if(age >22){
    console.log("Yes Bachhe nahi rahe");
}
else if(age >18){
    console.log("18 Bachhe nahi rahe");
}
else{
    console.log("Bachhe rahe");
}
console.log("End of ladder");
*/



// ---------------for loop---------------
var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         break;
//         // continue;
//     }
//     console.log(arr[i])
// }

//short hand for poperty----
// arr.forEach(function(element){
//     console.log(element);
// })


//--------------while loop
let j = 0
// while(j<arr.length ){
//     console.log(arr[j]);
//     j++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// } while(j < arr.length);


//------------switch case-----
// switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       console.log('today  day is', day)
//       break;
//     case 1:
//       day = "Monday";
//       console.log('todays day is', day)
//       break;
//     case 2:
//        day = "Tuesday";
//        console.log('todays day is', day)
//       break;
//     case 3:
//       day = "Wednesday";
//       console.log('todays day is', day)
//       break;
//     case 4:
//       day = "Thursday";
//       console.log('todays day is', day)
//       break;
//     case 5:
//       day = "Friday";
//       console.log('todays day is', day)
//       break;
//     case 6:
//       day = "Saturday";
//       console.log('todays day is', day)
//   }


// -----------arrays method------
let array = ['er', 'mapsh', 'is', 21 , 'years old', 'and', 'is', true];
// console.log(array)
// console.log(array.length)
// array.pop()//for last one wants to remove
// console.log(array)
// array.push(array) //append to last element
// console.log(array)
// array.shift() //remove first element form array
// console.log(array)
// array.unshift('Mr')//ad new element to first index
// console.log(array)
// array.toString()//convert to string 
// array.sort()//sort a array


//stirng method in js -------------
let mystring = 'The fucking lovely string is';
// console.log('length of string: ', mystring.length);
// console.log(mystring.indexOf('fucking'))//return the index of argument in string
// console.log(mystring.lastIndexOf('is'))//return the index of argument in string
// console.log(mystring.slice(0, 11))//slicing method
// console.log(mystring.replace('fucking', 'bitch'))//replace only one reference in mystring


//Dates in js -------------
mydate = new Date();
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getDay());
// console.log(mydate.getHours());
// console.log(mydate.getMinutes());
// console.log(mydate.getDate());


//DOM manipulation-------------
let eleid = document.getElementById('container');
// console.log(eleid)
// console.log(eleid.classList.add('bg-voilet'));//if u add one of poperty through class
// console.log(eleid.classList.add('bg-text'));//if u add one of poperty through class
// console.log(eleid.classList.remove('bg-text'));//if u remove one of poperty through class

//using class-------------
// let eleclass = document.getElementsByClassName('first');
// eleclass[0].style.background = 'yellow'
// console.log(eleclass[0].innerHTML)//Html
// console.log(eleclass[0].innerText)//only text 

//create a child in -------------
let create = document.createElement('p');
create.innerText = "this is fucking goood, and inserted using appendChild and we can also remove child using removeChild";
eleid.appendChild(create);
// eleid.removeChild(create)

//by call the tagname--------------
tg = document.getElementsByTagName('div')
// console.log(tg)
created_ele = document.createElement('h1')
created_ele.innerText = "This is a created heading"
tg[0].appendChild(created_ele)
//replace the child-------------
created_ele1 = document.createElement('b')
created_ele1.innerText = "This is a created bold"
tg[0].replaceChild(created_ele1, created_ele);

//selcting using query
// que = document.querySelector('.first')//first one element
// console.log(que)

 



//Event in js------------------
// function clicked(){
//     alert("button has clicked")
// }

// window.onload = function(){
//     console.log('The document has loaded')
// }



// container.addEventListener('click', function(){
//     document.querySelectorAll('h1')[1].innerText = "this occur when u click on button";

//     document.getElementsByTagName('h1')[1].addEventListener('mousedown', function(){
//         console.log('mouse dab gaya')
//         document.getElementsByTagName('h1')[1].innerText = "new text"
//     })
//     document.getElementsByTagName('h1')[1].addEventListener('mouseup', function(){
//         console.log('mouse chut gaya')
//         document.getElementsByTagName('h1')[1].innerText = "this occur when u click on button";
//     })

//     console.log("click huva")
// })




// para.addEventListener('mouseover', function(){
//     console.log('mouse hover on para container..')
// })

// para.addEventListener('mouseout', function(){
//     console.log('mouse out on para container..')
// })

// para.addEventListener('mouseup', function(){
//     console.log('mouse up on container..')
// })

// para.addEventListener('mousedown', function(){
//     console.log('mouse down on container..')
// })


//arrow function----------------
function arrow(a, b){
    return "is so big";
}

sum = (a, b)=>{
    // console.log("addition of no: ")
    return a+b;
}

//set timeout and set interval----------------
//set timeout---
// logkaro = ()=>{
//     console.log('I m ur log')
// }
// setTimeout(logkaro, 2000)

//directly we dont need to create function
setTimeout(()=>{
    document.querySelectorAll('p')[1].innerText = "this occur when set timeout time fired";
    // console.log('h1 tag changes in second container');
}, 2000)

//set interval
clr = setInterval(()=>{console.log('set interval fire');}, 2500)
// console.log(clr) //setInterval/setTimeout has unique id, using that u can stop setI or setTiemout
clearInterval(clr) //use clearInterval/ clearTimeout to cancle it  use id or assign var




//Javascript local storage-----------
localStorage.setItem("name","ermapsh");
// console.log(localStorage.getItem('name'));
// localStorage.clear();
// localStorage.removeItem("name");


// JSON--------------------------------------------------------
obj = {name: "ermapsh", age: 21, "a": {this: "this is a string", that : "i wanna highlight \"ermapsh\""}};
// console.log(typeof(obj));
// console.log(obj);

// convert to string form javascript object
string = JSON.stringify(obj);
// console.log(typeof(string))

//convert to string to json
object_from_string = JSON.parse(string)
console.log(object_from_string)

let ab = 5;
console.log(`Using backticks, this is my ${ab}`)


