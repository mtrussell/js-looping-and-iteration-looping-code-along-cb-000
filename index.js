// Code your solutions in this file

function printBadges(arr){
  for(let i = 0; i < arr.length; i++){
    let employeeNumber = i + 1;
    console.log(`Welcome ${arr[i]}! You are employee #${employeeNumber}.`);
  }
  return arr;
}


function tailsNeverFails(){
  let flip = 0.5;
  let count = 0;
  while(flip >= 0.5){
    flip = Math.random();
    if (flip >= 0.5){
      count += 1;
    }
  }

  console.log(`You got ${count} tails in a row!`);
  return `You got ${count} tails in a row!`;
}
