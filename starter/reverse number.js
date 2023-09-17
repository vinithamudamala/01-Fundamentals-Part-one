/*const jonas = ["Jonas", "vinitha", 2037 - 1991, "teacher"];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}

const numberToReverse = 1234;
for (let i = numberToReverse; i >= 0; i--) {
  console.log(numberToReverse(i));
}
*/

let x = 9440310022;
y = 10;
reverseNumber = 0;
while (x / y > 1) {
  reverseNumber = (reverseNumber + (x % y)) * 10; //0+=(1234%10)=4*10=40
  //40+30=70
  x = parseInt(x / y); //x=1234/10=123
}
console.log(reverseNumber + x); //123.4 123
//console.log(x % y); //4*10=40
