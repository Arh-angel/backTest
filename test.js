const user = process.argv[2]

console.log('user =', user)

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
  return result;
}


console.log(kvur(1, 12, 36));