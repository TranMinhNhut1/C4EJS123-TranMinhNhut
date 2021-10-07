// 1 Variable swap
// Swapping variable is to exchange the values of two variable so that at the end, one variable contains the value of the other
// vd1
// let a = 5, b = 6;
// console.log(a, b);
// [a, b] = [b, a];
// console.log(`${a} ${b}`);
// vd2
// let a = 1,b=2,tmp;
// console.log(a, b);
// tmp = a;
// a = b;
// b = tmp;
// console.log(a,b);

// 2 Split String into Array Using type conversion from String to Array
// let x=('how are you?');
// const y=x.split();
// console.log(y);

// 3 In JavaScript, the spread operator (three dots): … can be useful in several tasks. Of these tasks is to log (print out) an array without using loops, try it:
// let a=['con bo','con heo','con vit'];
// console.log(...a);
// let x = [4, 5, 7, -8];
// console.log(...x);

// 4 Write a script to simulate a clothes shop, asking and performing certain tasks from users
// let items=['Jeans','T-Shirt','Socks'];
// let a=prompt('Hi there, welcome to shop admin panel, what do you do want(C,R,U,D)?');
// while(a!=='C'&&a!=='c'&&a!=='R'&&a!=='r'&&a!=='D'&&a!=='d'&&a!=='U'&&a!=='u')
// {
//     alert('This command is not supported!')
//     a=prompt('Hi there, welcome to shop admin panel, what do you do want(C,R,U,D)?');
// }
//    while(a=='r'||a=='R'){
//         console.log('The current items are:');
//         a=prompt('Hi there, welcome to shop admin panel, what do you do want(C,R,U,D)?');
//         console.log(items);

// }
// if(a=='C'||a=='c')
// {
//     newitems=prompt('Enter the name of the new items');
//     items.push(newitems);
//     alert('Done');
//     a=prompt('Hi there, welcome to shop admin panel, what do you do want(C,R,U,D)?');
// }

// if(a=='u'||a=='U')
// {
//     let z=prompt('Enter the position you want to update');
//     let v=prompt('Enter the new name:');
//     items[z]=v;
//     alert('Done');
// }
// if(a=='d'||a=='D'){
// let s=prompt('Enter the possition you want to delete');
// items.splice(s,1);
// alert('Done');
// a=prompt('Hi there, welcome to shop admin panel, what do you do want(C,R,U,D)?');
// }


 
//  5.Write a script to ask users enter a sequence of numbers, the Numbers are separated by commas, calculate the sum of the numbers and show it to users
 
// let x=prompt('Enter a squence of Number,separated by commas(,)').split(',');
// let sum=0;
// for (let i = 0; i < x.length; i++) {
//   sum+=Number(x[i]);  
// }
// alert('The sum of them is '+sum);

// 6.Write a script asking users to enter a sequence of numbers, the numbers are separated by commas, find the smallest number and log it out to users
// let x=prompt('Enter a squence of number, separated by","').split(',');
// for(a in x){
//     x[a]=parseInt(x[a],10);
// }
// let min=Math.min(...x)
// alert('The smallest number is '+ min )
 
// 7.Create an array containing at least 5 numbers, then ask users enter a number, perform a search to look for the number in the array, if the number is found, tell user that with the index of it in the array, if not, also tell them so
// const x=[25,12,47,29,78];
// let a=Number(prompt('Enter a Number'));
// for (let i =0; i< x.length; i++)
// {
//     if(a==x[i]){
//         alert(a+ ' is FOUND in my array at index 3');
//     }
//     else{
//         alert(a+ ' is NOT found in may array');
//     }
// }  

// 8.You are a shepherd who owns a flock of sheep
// 8.1 Create an array to represent the sizes of your flock, and log all of your flock size, expected screen output:

// let x=prompt('log all of your flock size').split(',').map(Number);
// console.log('Hello, my name is Minh Nhut and here is my sheep sizes:');
// console.log(x);

// // 8.2 At the end of each month, you have to choose one and only one sheep to shear and thus you want to choose the biggest one to maximize your profit. Add scripts to search for the biggest sheep in your list:
// let max=Math.max(...x);
// console.log('Now my biggest sheep has size '+ max );

// // 8.3 When your biggest sheer, its size will return to the default size, which is 8.
// console.log('After shearing, here is my dlock');
// x[x.indexOf(Math.max(...x))]=8;
// console.log(...x);

// // 8.4 In the following month, EVERY sheep in your flock grow, they have their size increased by 50. Log them out
// console.log('Month 1');
// console.log('One month has, passed, my sheeps have grown, here are their sizes')
// for (let i = 0; i< x.length; i++) {
//   x[i]+=50;
//     }
// console.log(x);

// // 8.5 Let’s do this for 4 months (or as long as you want)
// let max2=Math.max(...x);
// console.log('Now my biggest sheep has size '+ max2 );
// console.log('After shearing, here is my dlock');
// x[x.indexOf(Math.max(...x))]=8;
// console.log(...x);
// let Month=5;
// let s=0;
// for ( s = 2; s <= Month; s++){
//     for (let i = 2; i <x.length ; i++) {
//         x[i]+=50;
//     }
//     console.log('Month'+s);
//     console.log('One month has, passed, my sheeps have grown, here are their sizes');
//     console.log(...x);
//     if(s=='5'){
//         break;
//     }
//     else{
//      let max3=Math.max(...x);
//     console.log('Now my biggest sheep has size '+ max3 );
//     console.log('After shearing, here is my dlock');
//     x[x.indexOf(Math.max(...x))]=8;
//     console.log(...x);}

// }
// // 8.6 After day by day shearing sheep, you became bored. You want to sell your flock to travel the world. In order to have fair trade, you must now calculate the total size of your sheep and then the expected money you can get from selling your flock, before going to the market. Write a program to calculate the total size of your sheep as well as the money you would have. Expected console output:
// let sum=0;
// for(let i=0;i<x.length;i++){
//     sum+=x[i];
// }
// console.log('My flock has size in total:'+sum);
// console.log('I wouid get '+sum+'*2'+'$'+' = '+sum*2);


// 10 (Optional) Write a script asking users to enter a sequence of names, separated by commas (,), Create a new array containing the names, each surrounded with <>. If you need hints, find them at the end of this homework
// let x=prompt('Enter a sequence of names').split(',');
// let map1=x.map(x=>'<'+x+'>');
// alert(x+'=>'+map1);

// 11.(Optional) Write a script asking users to enter a sequence of Numbers, separated by commas (,). Create a new array containing only the odd Numbers of the entered sequence. If you need hints, they are at the end of this homework
// let x=prompt('Enter a squence of number, separated by","').split(',');
// let mang=x.filter(function(num) {
//     return num%2==1;
// })
// alert(x+'=>'+mang);
