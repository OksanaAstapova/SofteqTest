let secretInteger = Math.floor(Math.random() * 1000000);
let attempt = 0;
let output;

function verify(guess){
  attempt++;
  guess = Number.parseInt(prompt("Enter your guess (between 0 and 1000000): "));
  console.log(attempt);
  while (attempt < 51){
    if(guess === secretInteger){output = 0;}
    else {guess < secretInteger ? output = -1 : output = 1};
    return output;
  }
}