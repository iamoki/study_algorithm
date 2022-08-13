// 볼수 있는 숫자(키) 구하기
function solution(arr) {
  let answer = 1;
  let max = arr[0];

  for(let i = 1; i < arr.length; i++) {
    // console.log(arr[i], arr[i - 1]);
    if(max < arr[i]) {
      max = arr[i];
      answer++;
    }
  }
  
  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
