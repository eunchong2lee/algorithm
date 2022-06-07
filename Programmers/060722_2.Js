// https://programmers.co.kr/learn/courses/30/lessons/62048

function solution(w, h) {
  var answer = 1; 
  for(i = 1 ; i < Math.max(w,h)+1 ; i++)
  {
      result = 1;
      if( w % i == 0 && h % i == 0)
      {
          result = i;
      } 
      answer = Math.max(answer, result) 
  }  
  return w*h - (w+h-answer);
}
// resolve
// https://m.blog.naver.com/orbis1020/220664563768

w= 8
h= 8

console.log(solution(w,h));