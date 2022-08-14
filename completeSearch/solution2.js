function isPrime(number) {
  if (number === 1) return false;
  for(let i = 2; i <= parseInt(Math.sqrt(number)); i++) {
    if(number % i === 0) return false;
  }
  return true;
}

function solution(num) {
  let answer = [];

  for(let i of num) {
    let res = Number(i.toString().split('').reverse().join(''));
    if(isPrime(res)) answer.push(res);
  }

  return answer;
}

let num = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(num));
