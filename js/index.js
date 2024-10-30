// function main() {
//   let a = 10;
//   let b = 20;
//   let c;
//   return a;
// }

// const hello = function (name) {
//   console.log("Xin chao ban ");
// };

// function checkNumber() {
//   let number = prompt("Nhap so nguyen duong");
//   while (!number || number != undefined) {
//     number = prompt("Nhap so nguyen duong");
//   }
//   if (number % 2) {
//     alert(number + " la so le");
//   } else {
//     alert("Day la so chan");
//   }
// }

// const checkHeal = (height, weight) => {
//   const BMI = weight / height ** 2;
//   const minWeight = parseInt(18 * height ** 2);
//   const maxWeight = parseInt(24 * height ** 2);
//   if (BMI <= 18) {
//     console.log(
//       "Ban dang thieu can. Can nang nen trong khoang tu " +
//         minWeight +
//         " den " +
//         maxWeight
//     );
//   } else if (BMI <= 24) {
//     console.log("Ban can doi");
//   } else {
//     console.log(
//       "Ban dang thua can. Can nang nen trong khoang tu " +
//         minWeight +
//         " den " +
//         maxWeight
//     );
//   }
// };

// // let myNumber = 100;
// // switch (myNumber % 2) {
// //   case 0:
// //     console.log(`Day la s
// //       o chan`);
// //     break;
// //   case 1:
// //     console.log("Day la so le");
// //     break;
// //   default:
// //     console.log("Khong phai so");
// // }

// function div3(n) {
//   let sum = 0;
//   while (n / 10 > 0) {
//     sum += n % 10;
//     n = (n - (n % 10)) / 10;
//   }
//   if (sum % 3 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function getName(email) {
//   let index = email.indexOf("@");
//   return email.slice(0, index);
// }

// function checkPassword(str) {
//   const password = str.trim();
//   if (password.length < 8) {
//     return false;
//   }
//   let i = 0;
//   let count = 0;
//   while (i < password.length) {
//     if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
//       count++;
//       break;
//     }
//     i++;
//   }
//   let j = 0;
//   while (j < password.length) {
//     if (password.charCodeAt(j) >= 65 && password.charCodeAt(j) <= 90) {
//       count++;
//       break;
//     }
//     j++;
//   }
//   let k = 0;
//   while (k < password.length) {
//     if (password.charCodeAt(k) >= 97 && password.charCodeAt(k) <= 122) {
//       count++;
//       break;
//     }
//     k++;
//   }
//   if (count < 3) {
//     return false;
//   }
//   // if (password.search(/[0-9]/) == -1 || password.search(/[a-z]/) == -1 || password.search(/[A-Z]/) == -1) {
//   //   return false;
//   // }
//   return true;
// }

// const product = {
//   id: 1,
//   title: "Essence Mascara Lash Princess",
//   description:
//     "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
//   categoryId: 1,
//   price: 9.99,
//   discountPercentage: 7.17,
//   rating: 4.94,
//   stock: 5
// };
// const category1 = [
//   {
//     id: 1,
//     name: "beauty",
//     description: "The Essence beauty mascara"
//   },
//   {
//     id: 2,
//     name: "food",
//     description: "The Essence beauty mascara"
//   },
//   {
//     id: 3,
//     name: "fashion",
//     description: "The essence beauty mascara"
//   }
// ];
// category1.forEach((item) => {
//   if (item.id == product.categoryId) {
//     product.categoryId = item.name;
//   }
// });
// console.log(product);
// const std1 = ["A", "B", "C"];
// const std2 = ["D", "E", "F"];
//add two array
// const std3 = [...std1, ...std2];

// std1.push(...std2);
// const text3 = std1.concat(std2);

// const std2Length = std2.length;
// for (let i = 0; i < std1.length; i++) {
//   std2[std2Length + i] = std1[i];
// }

// const arr3 = [];
// for(let i = 0; i < std1.length; i++) {
//   arr3[i] = std1[i];
// }
// for(let i = 0; i < std2.length; i++) {
//   arr3[std1.length + i] = std2[i];
// }

// const text1 = std1.join(",");
// const text2 = std2.join(",");
// const text3 = text1 + "," + text2;
// const arr3 = text3.split(",");
// console.log(arr3);

// const employees = [
//   { name: "A", age: 32, address: "HN" },
//   { name: "B", age: 25, address: "DN" },
//   { name: "C", age: 32, address: "HCM" },
// ];
// let employee = employees[0];
// employees.forEach((item) => {
//   if (item.age > employee.age) {
//     employee = item;
//   }
// });
// console.log(employee);

// let para = "Hello. World. F8.";
// let arr = para.split(" ");
// let text = "<p>" + arr.join("</p><p>") + "</p>";
// console.log(text);

// let username = "nguyEn mINH hOAng";

// function capitalizeName(str) {
//   const arr = str.toLowerCase().split(" ");
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//   }
//   str = arr.join(" ");
//   return str;
// }
// console.log(capitalizeName(username));

// function camelCaseName(str) {
//   const arr = str.toLowerCase().split(" ");
//   for (let i = 1; i < arr.length; i++) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//   }
//   str = arr.join("");
//   return str;
// }
// console.log(camelCaseName(username));

// function slugName(str) {
//   return str.toLowerCase().replaceAll(" ", "-");
// }
// console.log(slugName(username));

// const students = [
//   { id: 1, name: "hoang", score: 3 },
//   { id: 2, name: "dung", score: 5 },
//   { id: 3, name: "thuy", score: 7 },
//   { id: 4, name: "thanh", score: 9 },
//   { id: 5, name: "tuan", score: 10 },
//   { id: 6, name: "tung", score: 8 }
// ];

// function findExcellentStudents(students) {
//   const excellentStudents = [];
//   const mediumStudents = [];
//   const failedStudents = [];
//   for (let i = 0; i < students.length; ) {
//     if (students[i].score >= 8) {
//       excellentStudents.push(students[i]);
//     } else if (students[i].score >= 5) {
//       mediumStudents.push(students[i]);
//     } else {
//       failedStudents.push(students[i]);
//     }
//     students.splice(i, 1);
//   }
//   return {
//     excellentStudents,
//     mediumStudents,
//     failedStudents
//   };
// }

// const people = [
//   { id: 1, name: "hoang" },
//   { id: 2, name: "dung" },
//   { id: 3, name: "thuy" },
//   { id: 4, name: "thanh" }
// ];
// function callback(item) {
//   item.cart = [];
// }
// function addCart(people) {
//   people.forEach(callback);
// }

// const employees = [
//   { id: 1, name: "Hoang", homeTown: "Hanoi", gender: "male" },
//   {
//     id: 1,
//     name: "Dung",
//     homeTown: "Hanoi",
//     gender: Infinity
//   },
//   { id: 1, name: "Lan", homeTown: "Bacninh", gender: "female" }
// ];
// const result = employees.every((item) => {
//   item.desc = "abc";
//   return item.id && item.name && item.homeTown && item.gender;
// });

// const arr = [1, 2, 3, 4, 5];
// const arrx5 = arr.map((item) =>  item * 5);
// console.log(arrx5);

// const products = [
//   { id: 1, name: "Iphone 16", price: 1000 },
//   { id: 2, name: "Iphone 15", price: 900 }
// ];

// document.write(
//   products
//     .map(
//       (item) =>
//         `<div class="product-card">
//           <h3>${item.name}</h3>
//           <p>${item.price}</p>
//         </div>`
//     )
//     .join("")
// );

// const students = [
//   "Nguyen Manh Huy",
//   "Nguyen Thanh An",
//   "Phan Tuan Manh",
//   "Nguyen Truong Giang",
//   "Tran Ngoc Duy",
//   "Hoang Thanh Huy",
//   "Nguyen The Han",
//   "Le Huu Trong",
//   "Vu Quoc Dung",
//   "Nguyen Hai Duong",
//   "Nguyen Trung Hieu",
//   "Tran Duy Dong",
//   "Nguyen Minh Hoang",
//   "Nhung",
//   "B Nhung",
//   "A Nhung",
//   "C Nhung"
// ];

// function sortStudents(students) {
//   const newStudents = students.map((item) => {
//     return item.split(" ");
//   });
//   newStudents.sort((a, b) => {
//     if (a[a.length - 1] > b[b.length - 1]) {
//       return 1;
//     } else if (a[a.length - 1] < b[b.length - 1]) {
//       return -1;
//     } else {
//       const cloneA = a.concat([]);
//       const cloneB = b.concat([]);
//       cloneA.pop();
//       cloneB.pop();
//       if (cloneA.join(" ") > cloneB.join(" ")) {
//         return 1;
//       } else if (cloneA.join(" ") < cloneB.join(" ")) {
//         return -1;
//       } else {
//         return 0;
//       }
//     }
//   });
//   return newStudents.map((item) => {
//     return item.join(" ");
//   });
// }
// console.log(sortStudents(students));

// function sum(args) {
//   return args.reduce((acc, cur) => acc + cur);
// }

// const myAccount = {
//   email: "hoangnm@gmail.com",
//   password: "123456"
// };

// const myInfor = {
//   friendList: [],
//   skill: [],
//   address: "HN",
//   linkCV: "https://fullstack.edu.vn"
// };
// const myInfor2 = {
//   ...myInfor,
//   ...myAccount
// };

// const day = new Date("2024-08-10 23:59:00");
// const now = new Date();
// const result = +((now - day) / 1000 / 60 / 60).toFixed(2);

// const result4 = setInterval(() => {
//   console.log("Hello");
// }, 1000);
// console.log(result4);
// let i = 1;
// const result = setInterval(() => {
//   console.log(i++);
//   if (i === 101) {
//     clearInterval(result);
//   }
// }, 100);

// const elements = document.querySelectorAll("ul li:first-child");
// elements[0].setAttribute("abc", "123");
// const value = elements[0].removeAttribute("abc");
// console.log(elements[0].getAttribute("abc"));

// const h1El = document.querySelector("h1");
// h1El.style.cssText = "color: red";

// const btn = document.querySelector("button");

// function changeColor() {
//   const body = document.querySelector("body");
//   body.classList.toggle("dark");
// }

// trEls.forEach((trEl) => {
//   trEl.style.backgroundColor = "gray";
// });

// const liEl = document.createElement("li");
// liEl.innerText = "Link 4";

// const ulEl = document.querySelector("ul");
// ulEl.appendChild(liEl);

// const contentLi = prompt("Nhập nội dung muốn thêm");

// function addToDo(contentLi) {
//   const ulEl = document.querySelector("ul");
//   const liEls = document.querySelectorAll("li");
//   const liEl = document.createElement("li");
//   liEl.innerText = contentLi;
//   ulEl.appendChild(liEl);
//   liEls.forEach((liEl) => {
//     ulEl.appendChild(liEl);
//   });
// }
// addToDo(contentLi);

// const ulEl = document.querySelector("ul");
// const liEl = document.querySelector("li:nth-child(2)");
// liEl.remove();

// const clickBtnEl = document.getElementById("clickBtn");
// clickBtnEl.onclick = function () {
//   console.log("Hello");
// };

// const slides = document.querySelectorAll(".slide");
// const nextBtn = document.querySelector(".next");
// const prevBtn = document.querySelector(".prev");
// const carouselInner = document.querySelector(".carousel-inner");
// const dots = document.querySelectorAll(".dot");
// let currentSlide = 1;

// nextBtn.addEventListener("click", () => {
//   if (currentSlide == slides.length) {
//     currentSlide = 0;
//   }
//   carouselInner.style.transform = `translateX(-${currentSlide}00%)`;
//   dots.forEach((dot) => {
//     dot.classList.remove("active");
//   });
//   dots[currentSlide].classList.add("active");
//   currentSlide++;
// });

// prevBtn.addEventListener("click", () => {
//   currentSlide--;
//   if (currentSlide < 1) {
//     currentSlide = slides.length;
//   }
//   dots.forEach((dot) => {
//     dot.classList.remove("active");
//   });
//   dots[currentSlide - 1].classList.add("active");
//   carouselInner.style.transform = `translateX(-${currentSlide - 1}00%)`;
// });
// dots[0].classList.add("active");
// dots.forEach((dot, index) => {
//   dot.addEventListener("click", () => {
//     currentSlide = index + 1;
//     carouselInner.style.transform = `translateX(-${currentSlide - 1}00%)`;
//     dots.forEach((dot) => {
//       dot.classList.remove("active");
//     });
//     dot.classList.add("active");
//   });
// });

// const user = {};
// function checkUser() {
//   user[event.target.name] = event.target.value;
//   console.log(user);
// }
// const user2 = {};
// const form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const formData = new FormData(form);
//   console.log(formData.get());
//   formData.get("password");
// });

//day30
// const formElement = document.getElementById("registerForm");
// formElement.addEventListener("submit", function() {
//   event.preventDefault();
//   //Approach 1
//   // const valueEmail = document.getElementById("email").value;
//   // const valuePassword = document.getElementById("password").value;
//   // console.log({ valueEmail, valuePassword });
//   // Approach 2
//   const formData = new FormData(formElement);
//   const data = Object.fromEntries(formData);
//   if (!data.email || !data.password) {
//     alert("Vui loing nhap du thong tin!");
//     return;
//   }
//   if (data.password.length < 8) {
//     alert("Password can toi thieu 8 ky tu");
//   }
//   const savedUsers = JSON.parse( localStorage.getItem("users") || "[]" );
//   localStorage.setItem("users", JSON.stringify([...savedUsers, data]));

//   this.reset();
// });

// const parentEl = document.getElementById("parent");
// const childEl = document.getElementById("child");
// const btnEl = document.getElementById("btn");
// parentEl.addEventListener("click", function () {
//   console.log("click parentEl");
// });
// childEl.addEventListener("click", function () {
//   console.log("click childEl");
// });
// btnEl.addEventListener("click", function () {
//   console.log("click btnEl");
// });

// fetch("http://localhost:3000/todos", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     title: "Learn PHP",
//     desc: "Learn PHP and framework",
//     status: false
//   })
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// fetch("http://localhost:3000/todos")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     renderTodos(data);
//   });

// function taskA(callback) {
//   setTimeout(() => {
//     console.log("Task A done");
//     callback();
//   }, 3000);
// }
// function taskB(callback) {
//   setTimeout(() => {
//     console.log("Task B done");
//     callback();
//   }, 2000);
// }
// function taskC(callback) {
//   setTimeout(() => {
//     console.log("Task C done");
//     callback();
//   }, 1000);
// }
// console.time("callback-timer");
// taskA(() =>
//   taskB(() =>
//     taskC(() => {
//       console.log("Done all tasks");
//       console.timeEnd("callback-timer");
//     })
//   )
// );

// function taskA() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//       console.log("Task A done");
//     }, 3000);
//   });
// }
// function taskB() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//       console.log("Task B done");
//     }, 2000);
//   });
// }
// function taskC() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//       console.log("Task C done");
//     }, 1000);
//   });
// }
// Promise.all([taskA(), taskB(), taskC()]).then(() => {
//   console.log("Done all tasks");
// });

// function fetchAPI() {
//   fetch("http://dummyjson.com/products")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }
const url = "http://localhost:3000";
async function getAll(path) {
  try {
    const response = await fetch(`${url}/${path}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
async function updateById(path, id, data) {
  try {
    await fetch(`${url}/${path}/{${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data) 
    })
    console.log("Update success");
  } catch (error) {
    console.log(error);
  }
}
async function create(path, data) {
  try {
    await fetch(`${url}/${path}`, {
      method: "POST",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
  } catch (error) {
    console.log(error);
  }
}async function removeById() {
  try {

  } catch (error) {
    console.log(error);
  }
}
