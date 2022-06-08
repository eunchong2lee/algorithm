// https://programmers.co.kr/learn/courses/30/lessons/12939
// 최댓값과 최솟값  
// 성공

function solution(s) {
  var answer = '';
  high = Math.max.apply(null, s.split(' '))
  low = Math.min.apply(null, s.split(' '))
  return answer = `${low} ${high}`;
}
s= '1 2 3 4 5 6 7 8 9 10 11'

console.log(solution(s));