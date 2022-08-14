// 문자열 압축
function solution(str) {
  let answer = "";
  let num = 1;
  str = str + " ";

  for(let i = 0; i < str.length - 1; i++) {
    if(str[i] === str[i + 1]) {
      num++;
    } else {
      answer += str[i];
      if(num > 1) {
        answer += String(num);
        num = 1;
      }
    }
  }
  
  return answer;
}

let str = "KKHSSSSSSSE";

console.log(solution(str));
