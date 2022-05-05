const { stdin, stdout } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
  input: stdin,
  output: stdout
})

let a, b, c;

const callBackFromA = (answer) => {
  a = answer;
  rl.question('Enter B', callBackFromB);
}

const callBackFromB = (answer) => {
  b = answer;
  rl.question('Enter C', callBackFromC);
}

const callBackFromC = (answer) => {
  c = answer;
  kvur(a, b, c)
  rl.close()
}

rl.question('Enter A', callBackFromA);

let kvur = (a, b, c) => {
  let result = {};

  if (a == 0)
    return false;

  let dis = b * b - 4 * a * c;
  console.log('dis = ' + dis);

  if (dis < 0)
    return false;

  result['discriminant'] = dis;

  if (dis == 0)
    result["quadr roots"] = (-b + Math.sqrt(dis)) / (2 * a);

  else if (dis > 0) {
    let arr = [];
    arr.push((-b + Math.sqrt(dis)) / (2 * a));
    arr.push((-b - Math.sqrt(dis)) / (2 * a));
    result["quadr roots"] = arr;
  }
  console.log(result);
  return result;
}