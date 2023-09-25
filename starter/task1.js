/*create an array with all odd numbers that are smaller than 10
-> show that array with then alert command.
-> show how many elements the array contains.
-> add 2,4,6,8 to the end of the array and show it again
-> insert the value 20 on the 20th array element and show again
*/

array = [1, 3, 5, 7, 9];
alert(" show array with  odd numbers that are smaller than 10");
array.push(2, 4, 6, 8);
array.splice(19, 0, 20);
console.log(array);
