// function foo() {
//     document.write('<h1>hello world</h1>');
//     return 2;
// }
// let reuslt = foo();

// let reusit = multiply(11);
// if ( reuslt > 100 );
//     alert('over 100'); {
//     } else {
//     alert('less then 100');    
//     }
// }
// let myarr = ['a', 'b', 'c', 'd', 'e'];
// myarr.forEach( (value, index) =>{
//     console.log('value: '+value+'index: '+index)
// })

// let myrr1 = [-1,0,1];
// myrr1.forEach( (value, index) =>{
// console.log('negative')
// else if console.log('zero')
// else console.log('positave')
// })

// let myObj = {name: "daniel", age: 22, id: 22222222 };
// console.log(myObj.name);
// console.log(myObj.id);
// myObj.id = 1111111111;
// console.log(myObj.id);
// console.log ("my name is " + myObj.name + " my id is " + myObj.id);

// let myArr = [1, 2, 3, 4, 5];
// if(myArr [2] == 10){
// console.log ("equal")
// }else { console.log("not equal")
// }

// var1 = 10;
// var2 = 20;
// if (var1 > var2){
//     console.log("the great number of " + var1 + " and " + var2 + " is " + var1);
// } else {console.log("the great number of " + var2 + " and " + var1 + " is " + var2);
// }

// let a = 50;
// if (a >= 90){
//     console.log("a");
// } else if (a >= 80){
//     console.log("p");
// } else if (a >= 50){
//     console.log("c");
// } else if (a >= 20){
//     console.log("d");
// } else if (a >= 10){
//     console.log("f");
// }

// let myLow = "plant";
// let img_url;
// if (myLow == "human"){
//    img_url = "https://images1.calcalist.co.il/PicServer2/20122005/403696/starpicture.jpg_L.jpg"
// } else if (myLow == "animal"){
//     img_url = 
// } else if (myLow == "plant"){
//     img_url = "https://www.makorrishon.co.il/nrg/images/archive/465x349/1/366/438.jpg";
// }
// document.write('<img src="' + img_url +'">')

// let myVar = 4;
// switch ( myVar ){
//     case 1:
//     console.log('sunday')
//     break;
//     case 2:
//     console.log('monday')
//     break;
//     case 3:
//     console.log('tursday')
//     break;
//     case 4:
//     console.log('wednesday')
//     break;
//     case 5:
//     console.log('thursday')
//     break;
//     case 6:
//     console.log('friday')
//     break;
//     case 7:
//     console.log('sturday')
//     break;
//     default:
//     console.log('no souch day!')
//     break;
// }

// let myFamily = "sister";
// switch (myFamily){
//     case "mam":
//     alert('lia')
//     break;
//     case "dad":
//     alert('elior')
//     break;
//     case "brother":
//     alert('gay')
//     break;
//     case "sister":
//     alert('dalit')
//     break;
//     default:
//     alert('no family!')
//     break;             
// }

// for ( i = 0; i < 5; i++){
// document.write('itration number ' + i + '<br>' );
// }

// for ( let i = 1; i < 6; i++ ) {
// let str = "";
// for (let j = 0; j < i; j++) {
// str = str + "*"
// }
// document.write(str + '<br>');
// }

function foo(){
    document.write('<h1>hello world</h1>')
    return 2;
}
let reuslt = foo();

function mo( x1 ){
    let myVar = x1 * 10;
    return myVar;
}
let myVar = mo(4);

if (myVar > 100){
    alert('over 100');
} else {
    alert('less than 100');
}

let myType = {name: 'daniel', age:22};
function user(user_name, user_age){
    alert('your name is ' + user_name + ' and your age is ' + user_age);
}
user(myType.name, myType.age);

function printStarts() {
    let myStr = ""; 
for (let i = 0; i < 5; i++){
   myStr += "*";
console.log(myStr);      
}
}

