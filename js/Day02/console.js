console.time("timer");
for(let i = 0; i < 10 ** 8; i++) {
  // console.log(i);  
}
console.timeEnd("timer");

const myInfor = {
  name: "dungvq",
  age: 25,
  address: "Ha Dong, HN"
}
console.table(myInfor);
console.clear();
console.log("%cHello %cWorld", "color: red;", "color: green; font-weight: bold; background-color: yellow;");

// const isAlert = alert("Day la mot thong bao");
// const isConfirm = confirm("Day la mot thong tin can xac nhan");
const isPrompt = prompt("Ten cua ban la gi?");

console.log(isPrompt);