// 중복문자 제거하기
function solution(s) {
  let answer = "";

  for(let i = 0; i < s.length; i++) {
    // console.log(s[i], i, s.indexOf(s[i]));
    if(s.indexOf(s[i]) === i) {
      answer += s[i];
    }
  }

  return answer; 
}

console.log(solution("sttuddy"));