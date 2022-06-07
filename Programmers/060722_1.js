// https://programmers.co.kr/learn/courses/30/lessons/12899
// 124의 나라

// 성공

function solution(n) {
  var answer = '';
  const array = ['4','1','2']
  while (n>0){
      const remain = n % 3
      answer = array[remain] + answer;
      if(remain === 0){
          n = Math.floor((n-1)/3)
      }else{
          n = Math.floor(n/3)
      }
  }
  return answer;
}

n = 513

a= n.toString(3)
solution(n);