// 등수 구하기
function solution(arr) {
  let answer = Array.from({length: arr.length}, () => 1);

  for(let i = 0; i < arr.length; i++) {
    for(let x = 0; x < arr.length; x++) {
      console.log('arr i:' + arr[i]);
      console.log('arr x:' + arr[x]);
      console.log('----------------')
      if(arr[i] < arr[x]) {
        answer[i]++;
      }
    }
  }

  return answer;
}


let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));