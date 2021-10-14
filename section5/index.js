// 1.1
console.log(`Random number : ${Math.random().toFixed(2)}`);
// 1.2
let mang=[2,5,6,9,10]
let Random=mang[Math.floor(Math.random() * mang.length)];
console.log(`Random number arr: ${Random}`);
// 1.3  1.4  1.5
let question=[
    {
        cauhoi:'con cua may chan?',
        da:'1. 2 chan\n 2. 4 chan \n 3. 6 chan \n 4. 8 chan',
        dadung:4,
    },
    {
        cauhoi:'con bo an di?',
        da:'1. thit\n 2. dat \n 3. co \n 4. cai di cung an',
        dadung: 3,
    },
    {
        cauhoi:'VN vs Oman voi ti so bao nhieu',
        da:'1. 1-1\n 2. 1-3\n3. 2-2\n 4.0-0 ',
        dadung:2,
    },
]
let randum=Math.floor(Math.random()*question.length);
let chon=Number(prompt(question[randum].cauhoi+'\n'+question[randum].da));
while(true){
    if(chon==question[randum].dadung){
    alert('ban da chon dung');
    break;}
    else{
    alert('chon sai roi');
break;}
}
// 1.6 1.7 1.8
for(let i=0,dem=0;i<=question.length;i++)
let randum=Math.floor(Math.random()*question.length);
    let chon=Number(prompt(question[randum].cauhoi+'\n'+question[randum].da));
    if(chon==question[randum].dadung){
    dem+=1;
    
}
alert(`ban da dung ${diem} trong 3 cau hoi`);
// 2.1 Write a program to count the occurrences of the words
const countdata={};
let cactu=['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
for (let i =0;i  < cactu.length;i++) {
    const a=cactu[i].toLowerCase();
    if(countdata[a]){
        countdata[a]++;
    }
    else{
       countdata[a]=1;
    }
}
console.log(countdata);
// 2.2
let inventory = [
    {
        name: 'HP Envy 13aq',
        price: 21000,
        brand: 'HP',
        quantity: 5,
    },
    {
        name: 'Dell XPS 9370',
        price: 30000,
        brand: 'Dell',
        quantity: 1,
    },
    {
        name: 'Dell Inspiron 3567',
        price: 9300,
        brand: 'Dell',
        quantity: 12,
    },
    {
        name: 'Dell Latitude E5450',
        price: 8600,
        brand: 'Dell',
        quantity: 2,
    },
    {
        name: 'Asus Zenbook',
        brand: 'Asus',
        price: 20000,
        quantity: 4,
    },
    {
        name: 'HP Pavilion',
        brand: 'HP',
        price: 14000,
        quantity: 7,
    },
]
// 2.3
let inventoryByBrand = {
    'Dell':[],
    'Asus':[],
    'HP':[],

}

for(let i=0;i<inventory.length;i++){
    let b =inventory[i];
    console.log(b);
    let brand=b.brand;
    console.log(brand);
    inventoryByBrand[brand].push(b);
}
console.log(inventoryByBrand);
// 2.4
let sp=prompt('chon ten thuong hieu');
for(let i in inventoryByBrand){

    if(sp.toLowerCase() == i.toLowerCase()){
        alert(`there are ${inventoryByBrand[i].length} generations of ${sp} in inventory`);

    }
}
// 2.5 2.6 2.7
 sp=prompt('chon ten thuong hieu');
let listName = inventoryByBrand[sp];
console.log(listName);
let loaimay =[];
let tien;
let tongTien = 0;
for (let i = 0; i < listName.length; i++) {
    loaimay.push(listName[i].name);
    tien = listName[i].price * listName[i].quantity;
    tongTien += tien;
}
alert(`Có ${inventoryByBrand[sp].length} sản phẩm mang thương hiệu ${sp}:\n${loaimay.join('\n')}\n\nTổng giá trị: ${(tongTien*1000).toLocaleString()}VNĐ`);

