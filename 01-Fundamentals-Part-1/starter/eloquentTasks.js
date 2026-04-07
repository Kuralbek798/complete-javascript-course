
function printTriangles(element, quantity) {
  let line = [];
  for (let i = 0; i < quantity; i++) {
    let lineElements = []
    for (let j = 0; j <= i; j++) {
      lineElements.push(element);
    }
    line.push(lineElements);
  }

  for (let i = 0; i < line.length; i++) {
    console.log(line[i].join(' ') + ' \n');
  }
}
//printTriangles('#',10);
function fizzBuzz(quantity) {
  let fizz = [];
  let buzz = [];
  let fizzBuzz = [];
  let j = 0;
  for (let i = 1; i <= quantity; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizzBuzz.splice(fizzBuzz.length, 0, i);
      continue;
    }
    if (i % 3 === 0) {
      fizz.splice(fizz.length, 0, i);
      continue;
    }
    if (i % 5 === 0) {
      buzz.splice(buzz.length, 0, i);
      continue;
    }

  }
  console.log(fizzBuzz);
  console.log(fizz);
  console.log(buzz);

}

//fizzBuzz(50);

function chessBoard(length) {
  let white = ' ';
  let black = '#';
  let line = '';


  for (let i = 1; i <= length; i++) {
    let j = 1;
    if (i % 2 !== 0) {
      line += white;
      j = 2;
    } else {
      line += black
    }
    for (; j <= length; j++) {

      if (j % 2 !== 0) {
        line += white;
      } else {
        line += black
      }
    }
    line += '\n';
  }
  return line;
}
console.log(chessBoard(8));
