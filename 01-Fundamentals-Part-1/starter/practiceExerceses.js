import { printResults } from "./arraysMethodsJS";

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
let shoppingList = [];
//2.
printResults(shoppingList);
//shoppingList = shoppingList.concat('Milk', 'Bread', 'Apples');
//shoppingList.splice(0,0,'Milk','Bread', 'Apples');
  shoppingList.push('Milk','Bread', 'Apples');
printResults(shoppingList);
//3.
let breadIndex = shoppingList.indexOf('Bread');
shoppingList.splice(breadIndex,1,'Bananas', 'Eggs');
printResults(shoppingList);
//4.
let lastElement = shoppingList.pop();
printResults(shoppingList,lastElement);
//5.
shoppingList.sort((a,b) => a.localeCompare(b));
printResults(shoppingList);
//6.
let milkIndex = shoppingList.indexOf('Milk');
printResults(milkIndex);
//7.
let bananasIndex = shoppingList.indexOf('Bananas');
shoppingList.splice(bananasIndex + 1,0,'Carrots', 'Lettuce');
printResults(shoppingList);
//8.
let newshoppingList = ['Juice', 'Pop'];
//9.
shoppingList = shoppingList.concat(newshoppingList);
printResults(shoppingList);
//10.
const lastIndex = shoppingList.lastIndexOf('Pop');
printResults(shoppingList,lastIndex);
