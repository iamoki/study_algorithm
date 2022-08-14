// 문자거리
function solution(str, t) {
  let answer = [];
  let num = 1000;

  for(let i = 0; i < str.length; i++) {
    if(t === str[i]) {
      num = 0;
      answer.push(num);
    } else {
      num++;
      answer.push(num);
    }
  }

  p = 1000;

  for(let x = str.length - 1; x >= 0; x--) {
    if(t === str[x]) {
      p = 0;
    } else {
      p++;
      answer[x] = Math.min(answer[x], p);
    }
  }

  return answer;
}

let str = "teachermode";

console.log(solution(str, 'e'));
