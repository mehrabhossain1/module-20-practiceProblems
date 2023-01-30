// 1. function into a function
//  Wow!!! Wow!!! Surprised. thankyou jhankar sir

// function bar() {
//   var string2 = "boo";
//   console.log(string2);
// }
// function foo() {
//   var string = "foo";
//   console.log(string);
//   bar();
// }
// foo();

// 2. average of integers

// function make_avg(num1, num2, num3) {
//   var total = num1 + num2 + num3;
//   var avg = total / 3;
//   console.log(avg);
//   return avg;
// }
// make_avg(20, 12, 64);

// 3. array of an average

// const arr2 = [12, 26, 12, 14];
// function make_avg1() {
//   const arr = [1, 2, 3, 4, 5];
//   var sum = 0;
//   for (var number of arr) {
//     sum += number;
//   }
//   average = sum / arr.length;
//   console.log(average);
// }
// make_avg1();

// 4.odd even

// no return + has parameter
// function odd_even(num) {
//   if (num % 2 === 0) {
//     console.log("This is even");
//   } else {
//     console.log("This is odd");
//   }
// }
// odd_even(20);

// has return + has parameter
// function odd_even(num) {
//   if (num % 2 == 0) {
//     console.log("even");
//   } else {
//     console.log("odd");
//   }
//   return;
// }
// odd_even(21);

// 5. traffic signal

const color = "blue";

// if-else
// if (color === "red") {
//   console.log("danger");
// } else if (color === "yellow") {
//   console.log("stop");
// } else if (color === "green") {
//   console.log("cross");
// } else {
//   console.log("don't go outside");
// }
// console.log(color);

// switch
// switch (color) {
//   case "red":
//     console.log("danger");
//     break;
//   case "yellow":
//     console.log("cross");
//     break;
//   case "green":
//     console.log("stop");
//     break;
//   default:
//     console.log("wrong input");
// }

// module-20 problems
// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।
function namta() {
  let n = 13;
  for (let i = 1; i <= 10; i++) {
    console.log(n + "*" + i + "=" + n * i);
  }
}
namta();

// ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।

// ৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে।

function fullName(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  console.log(fullName);
}
fullName("mehrab", "munna");

// ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।

// function square(num1) {
//   let numSquare = num1 * num1;
//   console.log(numSquare);
// }
// square(2);

// 5. print pepperoni
const pizza = {
  toppings: ["cheese", "sauce", "pepperoni"],
  curst: "deep dish",
  serves: 2,
};
console.log(pizza.toppings[2]);
