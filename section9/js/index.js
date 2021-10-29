// 1
let promise=new Promise(function(resolve, reject){
setTimeout(()=>resolve("Promise is da best"),5000);
})
async function promiseTest() 
{
    alert ('loading');
     let result = await promise;
     alert (result);
}
 
promiseTest();
 promise.then(
    result => alert(result),
    error => alert(error));
// 2
{
    async function fetchThis() {
       let fetchPromise = await fetch ('https://reqres.in/api/users');   
        console.log('loading');
        console.log(fetchPromise);
        
    };

fetchThis();
}
// 3
// https://sheetdb.io/api/v1/9mhtfsgyadafk
// 4
let Ramdom=()=>{
    return Math.floor(Math.random()*11);
}
let x = Ramdom();
console.log(x);
if (x < 0) {
  console.log('Failed: the number is smaller than 0');
} else if (x > 10) {
  console.log('Failed: the number is bigger than 10');
} else {
  console.log('Passed, bravo');
}
// 5
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;}
let c = getRndInteger(4, 16);
console.log(c);
if (c < 4) {
  console.log('Failed: the number is smaller than 4');
} else if (c > 16) {
  console.log('Failed: the number is bigger than 16');
} else {
  console.log('Passed, bravo');

}
// 6

function points(x1,y1,x2,y2){
    return (Math.sqrt(Math.pow(x1 - x2, 2)+(Math.pow(y1 - y2, 2))))
}
let d = points(3, 10, 0, 6);
if (d !== 5) {
  console.log('Failed: the calculation is wrong');
} else {
  console.log('Passed, bravo');
}
// 7
{
  async function fetchtheApi() {
      let fetchData = await fetch('http://quotes.rest/qod.json');
      return await fetchData.json();
  }
  fetchtheApi().then (
      data => {
          document.getElementById('quote_content').innerHTML = data['contents']['quotes'][0]['quote'];
          document.getElementById('quote_author').innerHTML = data['contents']['quotes'][0]['author'];
      },
  )
    
}

