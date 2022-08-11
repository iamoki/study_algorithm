// 가운데 문자 출력하기
function solution(s) {
  let answer;
  let middle = Math.floor(s.length/2);
  
  if(s.length%2 === 0) {
    answer = s[middle - 1] + s[middle]
  } else {
    answer = s[middle];
  }

  return answer; 
}

console.log(solution("study"));