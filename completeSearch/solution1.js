function solution(num) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;

  for(let i = 0; i < num.length; i++) {
    let sum = num[i].toString().split('').reduce((a, b) => a + Number(b), 0);
    if(sum > max) {
      max = sum;
      answer = num[i];
    } else if (sum === max) {
      if(num[i] > answer) answer = num[i];
    }
  }

  return answer;
}

let num = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(num));
