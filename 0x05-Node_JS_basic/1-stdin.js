const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?\n');

rl.on('line', (input) => {
  const name = input.trim();
  console.log(`Your name is: ${name}\n`);
  console.log('This important software is now closing\n');
  rl.close();
});