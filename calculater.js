// calculer in js 

let choose = prompt("enter +, -,%,/,*  :");
let cal1 = Number(prompt("enter your 1st number :    "))
let cal2 = Number(prompt("enter your 2nd number  : "))

if (choose === '+') {
    total = cal1 + cal2;
    console.log(`your answer is ${total}`);
}
else if (choose === '-') {
    total = cal1 - cal2;
    console.log(`your answer is ${total}`);
}
else if (choose === '%') {
    total = cal1 % cal2;
    console.log(`your answer is ${total}`);
}
else if (choose === '/') {
    total = cal1 / cal2;
    console.log(`your answer is ${total}`);
}
else if (choose === '*') {
    total = cal1 * cal2;
    console.log(`your answer is ${total}`);
}

