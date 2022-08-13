// 채점하기
function solution(a, b) {
  let answer = 0;
  let cnt = 0;

  for(let i = 0; i < a.length; i++) {
    if(a[i] === 1) {
      cnt++;
      answer += cnt;
    } else {
      cnt = 0;
    }
  }
  
  
  return answer;
}

let a = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

console.log(solution(a));