function input(text) {
  return text.indexOf("a");
}
console.log(input("ali"));
//next
function input2(text) {
  return text.slice(0, text.length / 2);
}
console.log(input2("hello"));
//next
function input3(text1, text2) {
  if (text2.includes(text1)) {
    return text1 + " " + text2;
  } else {
    return text2 + " " + text1;
  }
}
console.log(input3("sir", "hello sir"));
//next
function input4(num) {
  if (num % 2 === 0) {
    return 1;
  } else {
    return 0;
  }
}
console.log(input4(6));
//next
function input5(num1, num2) {
  if (num1 > num2) {
    return 1;
  } else {
    return 0;
  }
}
console.log(input5(10, 20));
//next
let test = "ali";
console.log(test);
//next
let test1 = "ali";
let test2 = 20;
let test3 = true;
let test4 = null;
let test5;
console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
