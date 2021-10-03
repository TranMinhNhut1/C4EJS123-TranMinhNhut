// cau 1:
// a. What are var and const in JavaScript?
// const :Variables declared with the const maintain constant values
// var :With the var keyword, we can declare various types of variables such as number, string, boolean, etc.

// b.What are the differences between let and var?
// var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared
// var:function scoped 
// undefined when accessing a variable before it is declared
// let : Block scoped
// ReferenceError when accessing a variable before it is declared

// c. What are the differences between let and const?
// let can be declared without being initialized, const must be initialized during declaration.
// let and const is that once you’ve assigned a value to const, you can’t reassign it, but with let, you can.

// d.What to use in what cases?
//  to declare variables

// cau 2 
// a.What is Boolean?
// The boolean type has only two values: true and false.
// This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect

// b. What results in Boolean?
// return true or false
//cau 3 Write a program to print out
//a. 7 numbers, starting from 0 (no user input)

/*for(let x = 0;x<7;x++ ){
console.log(x);
}*/

// b. n numbers, starting from 0, n entered by user
/*let a=prompt('enter a number?')
for(let n=0;n<a;n++){
console.log(n);
}*/

// c. A sequence of numbers, starting from 3, ending before n, n entered by user
/*let n=prompt('Enter n')
for (let x = 3; x < n; x++){
console.log(x);
}*/
// d.A sequence of numbers, starting from c, ending before n, c and n entered by user
/*

let n=prompt('Enter n');
let c=prompt('Enter c');
for (;c<n ; c++) {
console.log(c);
}*/

// e.A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user
/*let n=Number(prompt('Enter n'));
let c=Number(prompt('Enter c'));
for(c;c<n;c+=3){
console.log(c);
}*/

// f. A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user
/*let n=Number(prompt('Enter n'));
let c=Number(prompt('Enter c'));
let s=Number(prompt('Enter s'));
for (c; c<n; c+=s) {
 console.log(c);
}*/
// cau 4 Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user
/*
let a=prompt('Enter a number');
let GT = 1;
for (let i=1; i <= a; i++) {
GT*=i;
}
alert('The factorial of '+ a +' is'+ GT )
*/
// cau 5 Write a program asking users their age, and then decide if they are old enough to view a 14+ content
/*let age=prompt('How old are you?');
if(age<14){
    alert('You are not old enough to view this content');
}
else{
    alert('Enjoy!');
}*/

// cau 6 Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range
/*let x=prompt("Enter a number");
if(x>4.5)
{
alert('Higher haif of 9');
}
else if (x<4.5)
{
alert('Lower half of 9') ;  
}    */

// cau 7 Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n
/*let n=prompt('n=');
let x=prompt('x=');
if(n>x){
alert(x+' is in lower half of '+ n);
}
 else if (n<x)
{
alert(x +'is higher half of ' + n);
} */

// cau 8. Write a script to check if a number is even (divisible by 2) or odd number
/*let x=prompt('x=');
if(x%2==0){
alert (x+ ' is an even number');
}
else if (x%2!==0){
alert(x+ ' is an old number');
}*/
// cau 9 Write a program to print out
// a. 6 L’s and H’s, half L’s, half H’s (L means low, H means high)
/*for (let x = 1; x < 4; x++) {
console.log('L');
}
for (let x = 1; x < 4; x++) {
console.log('H');
}*/
// b. n L’s and H’s in total, n entered by user
/*let x=prompt('Enter the total number of L`s and H`s');
for (let i=1;i<=Math.ceil(x/2);i++){
console.log('L');
}
for (let i=1;i<=Math.floor(x/2);i++){
console.log('H');
}*/

// c.8 1’s and 0’s in total, consecutively
/*for(let x=0;x<4;x++){
console.log(0);
console.log(1);
}*/

// d.n 1’s and 0’s in total, consecutively, n entered by user
/*let x=prompt('Enter the total number');
for(let i=0;i<x;i++){
if(i%2==0){
console.log(0);
}
else{
console.log(1);
}
}*/
// 10.Write a script to calculate the BMI (Body Mass Index) of a person, the formula is as follows
/*let kg=prompt('Your weight in kg?');
let cm=prompt('Your height in cm?');
let m =0;
let BMI=0;
m=cm/100;
BMI=kg/(m*m);
alert('Your BMI is '+ BMI);
if(BMI<16){
alert('Severely underweigh');   
}
else if(BMI<=18.5){
alert('Underweight');
}
else if(BMI < 25){
alert('You are normal');
} else if(BMI < 30){
alert('overweight');
} else{
 alert('obese');
}*/