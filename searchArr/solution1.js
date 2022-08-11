// 앞에보다 큰수 출력하기
function solution(arr) {
  let answer = [];
  answer.push(arr[0]);

  for(let i = 1; i < arr.length; i++) {
    // console.log(arr[i], arr[i-1])
    if(arr[i] > arr[i-1]) answer.push(arr[i]);
  }

  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
