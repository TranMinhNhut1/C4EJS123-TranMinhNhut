// bt nang cao
// Người dùng nhập n số nguyên ngẫu nhiên từ bàn phím.
// a. Sắp xếp dãy vừa nhập theo chiều tăng dần
// b. Lọc dãy trên thành 2 dãy: dãy chẵn và dãy lẻ
// c. Loại bỏ các số trùng nhau ở 2 dãy.
// a
let x=prompt('nhap n so nguyen cach nhau boi dau ,').split(',');
x.sort(function(a , b){return a-b});
console.log(x);
// b
console.log('Mang chua so chan');
let mang=x.filter(function(num){
return num%2==1;
})
console.log(mang);
console.log('Mang chua so le');
let mang1=x.filter(function(num){
    return num%2!==1;
    })
    console.log(mang1);
// c
console.log('Xoa gia tri trung lap');
let c= new Set(mang);
console.log(c);
let v= new Set(mang1);
console.log(v);