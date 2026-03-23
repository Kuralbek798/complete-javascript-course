//import { printResults } from "./arraysMethodsJS.js";

// 1. Create an empty array to use as a shopping list.
// 2. Add Milk , Bread , and Apples to your list.
// 3. Update " Bread " with Bananas and Eggs .
// 4. Remove the last item from the array and output it into the console.
// 5. Sort the list alphabetically.
// 6. Find and output the index value of Milk .
// 7. After Bananas , add Carrots and Lettuce .
// 8. Create a new list containing Juice and Pop .
// 9. Combine both lists, adding the new list twice to the end of the first list.
// 0. Get the last index value of Pop and output it to the console.
//1.
// let shoppingList = [];
// //2.
// printResults(shoppingList);
// //shoppingList = shoppingList.concat('Milk', 'Bread', 'Apples');
// //shoppingList.splice(0,0,'Milk','Bread', 'Apples');
//   shoppingList.push('Milk','Bread', 'Apples');
// printResults(shoppingList);
// //3.
// let breadIndex = shoppingList.indexOf('Bread');
// shoppingList.splice(breadIndex,1,'Bananas', 'Eggs');
// printResults(shoppingList);
// //4.
// let lastElement = shoppingList.pop();
// printResults(shoppingList,lastElement);
// //5.
// shoppingList.sort((a,b) => a.localeCompare(b));
// printResults(shoppingList);
// //6.
// let milkIndex = shoppingList.indexOf('Milk');
// printResults(milkIndex);
// //7.
// let bananasIndex = shoppingList.indexOf('Bananas');
// shoppingList.splice(bananasIndex + 1,0,'Carrots', 'Lettuce');
// printResults(shoppingList);
// //8.
// let newshoppingList = ['Juice', 'Pop'];
// //9.
// shoppingList = shoppingList.concat(newshoppingList);
// printResults(shoppingList);
// //10.
// const lastIndex = shoppingList.lastIndexOf('Pop');
// printResults(shoppingList,lastIndex);

// 1. Create a new myCar object for a car. Add some properties, including,
// but not limited to, make and model , and values for a typical car or
// your car. Feel free to use booleans, strings, or numbers.
// 2. Create a variable that can hold the string value color . This variable
// containing a string value color can now be used to reference the
// property name within myCar . Then, use the variable within the square
// bracket notation to assign a new value to the color property in myCar .
// 3. Use that same variable and assign a new property string value to it,
// such as forSale . Use the bracket notation once again to assign a new
// value to the forSale property to indicate whether the car is available
// for purchase.
// 4. Output make and model into the console.
// const myCar = {
//     model:'Toyota',
//     make: 2025,
//     color: "Red",
//     engineCapacity: 2.00,

// }
// const newColor = 'Blue';
// const isForSale = true;

// myCar['color'] = newColor;
// myCar['forsale'] = isForSale;
// printResults(myCar);
// // printResults(myCar.make + ' ' + myCar.model);


// 1. Create an object named people that contains an empty array that is
// called friends .
// 2. Create three variables, each containing an object, that contain one of
// your friend's first names, last names, and an ID value.
// 3. Add the three friends to the friend array.
// 4. Output it to the console.

// let people = [];
// const friend1 ={
//     firstName: 'Bob',
//     lastName: 'John',
//     id:1
// }
// const friend2 ={
//     firstName: 'Nancy',
//     lastName: 'Edington',
//     id:2
// }
// const friend3 = {
//     firstName: 'Mikle',
//     lastName: 'Nicolson',
//     id:3
// }
// //people = [friend1,friend2,friend3,...people];
// //people.splice(0,0,friend1,friend2,friend3);
// //let arraysLen = people.push(friend1,friend2,friend3);
//   people = people.concat(friend1,friend2,friend3);
//   people.unshift()
// printResults(people);

// let counter = 0;
// let step = 1;
// do {
//     console.log(counter);
//     counter += step;
// } while (counter < 100)

// const myWork = [];

// for (let i = 1; i <= 10; i++) {
//     let Lesson;
//     myWork.push((() => {
//         return {
//             name: `Lesson ${i}`,
//             status: i % 2 === 0 ? true : false
// };
//     })())
// }
// for(let item of myWork){
//     console.log(item)
//   for(let property in item){
//     console.log(item[property])
//   }
// }

let stringVariable = '';
let sckipValue = 5;
for(let i = 0;i < 10; i++){
 if(i === sckipValue){
    //continue;
    break;
 }
 stringVariable += ','.concat(i);
}
console.log(stringVariable)
