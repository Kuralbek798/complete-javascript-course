// let selectedElement = document.querySelector('.test')
// console.log(selectedElement);
// selectedElement.textContent = 'red';
// selectedElement.classList.add('111');
// selectedElement.style.backgroundColor = 'darkorange';
// console.log(selectedElement.classList);
// console.log(document.URL);
//
// 1. Select the element with the class output .
// 2. Create another JavaScript object called mainList and select only the
// ul tag that is within the output element. Update the ID of that ul
// tag to mainList .
// 3. Search for the tagName of each div , and output them into the console
// as an array.
// 4. Using a for loop, set the ID of each of the div tags to id with a
// numeric value of the order they appear within output. Still within the
// loop, alternate the color of the contents of each element in output to
// be red or blue.

let selectedNod = document.querySelector('.output');
console.log(selectedNod);
let mainList = selectedNod.querySelector('ul');
mainList.id = 'mainList';
// let tagNames = [...document.querySelectorAll('div')];
// tagNames.map((e,index) => e.id = index);
let tagNames = document.querySelectorAll('div');
for (let i = 0; i < tagNames.length-1; i++) {
    if(i === 0){
        i+1;
    }
    tagNames[i].id = i
    if (i % 2 === 0) {
        tagNames[i].style.color = 'blue';
    }else{
        tagNames[i].style.color = 'red';
    }

}
console.log(tagNames);
console.log(mainList);


