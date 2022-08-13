// 격자판 최대합
function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let sum1 = 0;
  let sum2 = 0;

  for(let i = 0; i < arr.length; i++) {
    sum1 = 0;
    sum2 = 0;
    for(let x = 0; x < arr.length; x++) {
      // console.log('i: '+arr[i]);
      // console.log('x: '+arr[x]);
      // console.log('i:x ' + arr[i][x]); // 행 구하기
      // console.log('x:i ' + arr[x][i]); // 열 구하기
      sum1 += arr[i][x];
      sum2 += arr[x][i];
      
      answer = Math.max(answer, sum1, sum2);
      console.log('행값: ' + sum1);
      console.log('열값: ' + sum2);
      console.log('------------');
    }
  }

  sum1 = 0;
  sum2 = 0;
  for(let i = 0; i < arr.length; i++) {
    // console.log(arr[i][i]); // 대각선 왼쪽에서 오른쪽아래
    // console.log(arr[i][arr.length - i - 1]); // 대각선 오른쪽에서 왼쪽아래
    // console.log(arr.length - i - 1)
    sum1 += arr[i][i];
    sum2 += arr[i][arr.length - i - 1];
    console.log('대각선값1: ' +sum1);
    console.log('대각선값2: ' +sum2);
    console.log('------------');

  }
  console.log('sum1: '+sum1);
  console.log('sum2: '+sum2);
  answer = Math.max(answer, sum1, sum2);
  return answer;
}


let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19]
];
console.log(solution(arr));