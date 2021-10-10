// 1
const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white',
};



//What does x receives from product, property or value?
// 1.1 property
// 1.2Use the for loop to print/log out the following output
for(let x in product){
    console.log(x+':'+product[x]);
}

// 2
const task = {
    subject: 'Implement login feature',
    createdBy: 'Hoang Ngoc Duc',
    assignTo: 'Nguyen Phuong Nam',
    dueDate: '2019-10-08T18:00:24+0000',
    expectedHours: 0.5,
};
( {dueDate,createdBy,assignTo,dueDate,expectedHours}=task);
console.log(dueDate);

// 3
// 3.1 What is the data type of the outermost layer (Number, String, Object, Array or else)?
//  object
// 3.2 The hits property is where the job results are stored, is it a Number, String, Array, Object or something else?
// 4 
// 4.1
let program={
debug: 'The process of figuring out why your program has a certain error and how to fix it' ,
done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed',
defect: 'The formal word for ‘error’',
pm: 'The short version  of Project Manager, the person in charge of the final result of a project',   
uiux: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
} ;
alert('Hi there, this is dev dictionary');
let x=prompt('Enter a keyword');

if(program.hasOwnProperty(x)){
  alert(x+'\n'+program[x]);
break;
}
else{
  alert('We could not find you word: '+x);
}
// 4.2
while(true){
  alert('Hi there, this is dev dictionary');
let x=prompt('Enter a keyword');
if(program.hasOwnProperty(x)){
  alert(x+'\n'+program[x]);
  break;
}
else{
 let GT=prompt('We could not find you word: '+x+'leave your explanation');
program[x]=GT;
}
}


// 5
// 5.1
let smp=[
  {
   Name: 'Xiaomi portable charger 20000mah',
   Brand: 'Xiaomi',
   Price:'428',
   Color:'White',
   Category:'Charger',
  },
  {
    Name: 'VSmart Active 1',
    Brand: 'VSmart',
    Price:'5487',
    Color:'Black',
    Category:'Phone',
  },
  {
    Name: 'IPhone X',
    Brand: 'Apple',
    Price:'21490',
    Color:'Gray',
    Category:'Phone',
  },
  {
  Name: 'Samsung Galaxy A9',
  Brand: 'Samsung',
  Price:'8490',
  Color:'Blue',
  Category:'Phone',
}

];
for (let i = 0; i < smp.length; i++) {
console.log('----------------------------------')  ;
console.log('Name: '+smp[i].Name);
console.log('Price: '+smp[i].Price);}
5.2

for (let i = 0,x=1; i < smp.length; i++,x++) {
  console.log('#'+x+smp[i].Name);
  console.log('Price: '+smp[i].Price);
}
console.log('========================');
 let STT=Number(prompt('Enter product position'));
 let a=STT-1;
 for (let i = 0; i < Object.keys(smp[a]).length ; i++) {
   let property=Object.keys(smp[a])[i];
   console.log(property+':'+smp[a][property]);
   
 }
// 5.3





// 6Write a script to store and process the learning tasks to become a front-end developer
// 6.1 Print it out
// alert('Hi there, this is your learning tasks to front-end developer cảeers');
