// cau 1
let str=prompt('Nhap cau ban muon dao');
let dao_str='';
for(let i=str.length-1;i>=0;i--){
    dao_str+=str[i];
}
console.log(dao_str);
// cau 2
function toUpper(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(function(Word) {
            return Word[0].toUpperCase() + Word.substr(1);
        })
        .join(' ');}
    

let chuoi=prompt('Nhap vao 1 chuoi ban muon viet hoa chu cai dau');
console.log(toUpper(chuoi))
// cau3
let mang=prompt('Nhap mang cac phan tu cach nhau boi dau ,').split(',').map(Number);
console.log([...new Set(mang)]);
// cau 4
let Data=[
    {
        Name:'Nguyen Van A',
        Age:21,
        salary: 8000000,
        position: 'giang vien',
    },
    {
        Name:'Tran Van B',
        Age:30,
        salary: 12000000,
        position: 'Quan li', 
    },
    {
        Name:'Le Van c',
        Age:50,
        salary: 50000000,
        position: 'Giam doc',
    }
]

let operation=prompt('nhap dung 1 trong 4 thao tac sau day(Read, Create, Update, Delete)');
if(operation=='Read'){
    console.log(Data);}
else if(operation=='Create'){
    
let x=prompt('nhap ten');
let y=Number(prompt('nhap tuoi'));
let z=Number(prompt('nhap luong'));
let k=prompt('nhap chuc vu');
 Data.push({Name: x ,Age:y ,salary: z ,position:k})
console.log(Data);
}
else if(operation=='Delete'){
    let vitri=Number(prompt('vi tri can xoa'));
    Data.splice(vitri-1,1);
    console.log(Data);
    
}
else if(operation=='Update'){
    let viTri = Number(prompt('nhap vi tri nguoi ban muon xoa'));
    let h=prompt('ban muon xoa phan nao')
    let newData= prompt('nhap du liêu ban muon thay vao');
    Data[viTri-1].Name = newData;
    console.log(Data); 
}
else{
    alert('Ban nhap ko đung yeu cau');
}
// cau 5



 
 


