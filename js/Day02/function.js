function main() {
  let a = 10;
  let b = 20;
  let c;
  return a;
}

const hello = function (name) {
  console.log("Xin chao ban ");
};

function checkNumber() {
  let number = prompt("Nhap so nguyen duong");
  while (!number || number != undefined) {
    number = prompt("Nhap so nguyen duong");
  }
  if (number % 2) {
    alert(number + " la so le");
  } else {
    alert("Day la so chan");
  }
}

const checkHeal = (height, weight) => {
  const BMI = weight / height ** 2;
  const minWeight = parseInt(18 * height ** 2);
  const maxWeight = parseInt(24 * height ** 2);
  if (BMI <= 18) {
    console.log(
      "Ban dang thieu can. Can nang nen trong khoang tu " +
        minWeight +
        " den " +
        maxWeight
    );
  } else if (BMI <= 24) {
    console.log("Ban can doi");
  } else {
    console.log(
      "Ban dang thua can. Can nang nen trong khoang tu " +
        minWeight +
        " den " +
        maxWeight
    );
  }
};

let myNumber = 100;
switch (myNumber % 2) {
  case 0:
    console.log(`Day la s
      o chan`);
    break;
  case 1:
    console.log("Day la so le");
    break;
  default:
    console.log("Khong phai so");
}
