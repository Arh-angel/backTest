const { stdin, stdout } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
  input: stdin,
  output: stdout
})

rl.question('Enter A', callBackFromA);

let a, b, c

const callBackFromA = (answer) => {
  a = answer
  rl.question('Enter B', callBackFromB)
}

rl.close()

const readStr = (string) => {
  console.log(`Read str ${string}`)
}

rl.on('line', readStr);