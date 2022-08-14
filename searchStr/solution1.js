// 회문 문자열
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();

  for(let i = 0; i < Math.floor(s.length/2); i++) {
    if(s[i] !== s[s.length - i - 1]) {
      answer = "NO";
    } else {
      answer;
    }
  }

  return answer; 
}

console.log(solution("gooG"));

// 메소드사용
// function solution(s) {
//   let answer = "YES";
//   s = s.toLowerCase();
//   let reverseStr = s.split('').reverse().join('');

//   if(s !== reverseStr) return "NO";

//   return answer; 
// }

// console.log(solution("gooG"));