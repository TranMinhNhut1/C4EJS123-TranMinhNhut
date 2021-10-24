// 1
// 1-d ,2-a,3-c,4-b
// 2
function bt2() {
  setInterval(function(){ console.log('Heehaw'); }, 2000);
}
3
// 3.1 No
// 3.2 No
4
function bt4_1() {
  let x = document.getElementsByTagName("li");
 console.log(x[1])
}
function bt4_2() {
  let z = document.getElementsByTagName('li');
for (let i = 0; i < z.length; i++) {
    console.log(z[i]);}}
// 5
function bt5_1() {
  let x = document.getElementsByClassName("singer");
  console.log(x[1])
}
 function bt5_2(){
  let x= document.getElementsByClassName('singer')
  for (let i = 0; i < x.length; i++) {
       console.log(x[i]);
 }}
// 6
function bt6(){
  let dele=document.getElementById("demo");
  dele.remove();
}
// // 7
let a = document.getElementById('button 1');
a.addEventListener('click', (e) => {
    console.log(e.target);
});
let b = document.getElementById('button 2');
b.addEventListener('click', (g) => {
    console.log(g.target);});
let c = document.addEventListener('keydown', (h) => {
      console.log(h.key);
});
// // 8
function bt8(){
  alert('Tran Minh Nhut');
  alert('tet dc nhieu tien lixi')
 }
// // 9
function bt9(name,wish){
alert(name);
alert(`${name}, ${wish}`)
}
let x=bt9;
x('Tran Minh Nhut','uoc di tet co nhieu tien')
10
function bt10(name,wish){
 alert(`${name}, ${wish}`)
}
let ten=prompt('nhap ten')
let dieuuoc=prompt('nhap dieu uoc')
if(dieuuoc==""){
  alert(ten);
}

// 11
// 11.2
const d=document.getElementById('upper_btn');
console.log(d);
// 11.3
// 11.4
const v=document.getElementById('inputname');
console.log(v);
// 11.8
d.addEventListener('click', (e) => {
      console.log(e.target);
      let Name = document.getElementById('inputname').value;
      console.log('userName: '+Name);
      Name = String(Name).toUpperCase();
      console.log('userName: '+Name);})
// 11.7
const r=document.getElementById('result_div');
console.log('r');
// 12
// 12.1
let belongings=["Backpack", "MiBand watch" ,"Ring"];
console.log(belongings);
// 12.2
const kt=document.getElementById('item');
// 12.3
console.log(kt);
// 12.4
for (let i = 0; i < belongings.length; i++) {
  kt.insertAdjacentHTML('beforeend', `
  <li>${belongings[i]}</li>
  `)
}
console.log(kt);
// 12.5
const items=document.getElementById('bt12');
console.log(items);
const add= document.getElementById('bt122');
console.log(add);

