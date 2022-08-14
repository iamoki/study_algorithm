// 숫자만 추출
function solution(s) {
  // let answer = Number(s.replace(/[^0-9]/g, ""));
  let answer = "";

  for(let i = 0; i < s.length; i++) {
    if(!isNaN(s[i])) answer += s[i];
  }

  return parseInt(answer); 
}

let str = "g0en2T0s8eSoft";

console.log(solution(str));
