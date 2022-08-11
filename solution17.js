// 중복문자 제거하기
// function solution(s) {
//   let answer = [];
//   for(let i = 0; i < s.length; i++) {
//     // console.log(s[i], i, s.indexOf(s[i]));
//     if(i === s.indexOf(s[i])) {
//       answer.push(s[i]);
//     }
//   }
//   return answer;
// }

// let arr = ['good', 'time', 'good', 'time', 'student']
// console.log(solution(arr));


// 고차함수 사용하기
function solution(s) {
  let answer;
  answer = s.filter((i, idx, arr) => {
    // console.log(i, idx, arr.indexOf(i))
    return idx === arr.indexOf(i);
  })

  return answer;
}

let arr = ['good', 'time', 'good', 'time', 'student']
console.log(solution(arr));