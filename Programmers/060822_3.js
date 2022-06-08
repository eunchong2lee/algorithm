// https://programmers.co.kr/learn/courses/30/lessons/12985


function solution(n,a,b)
{
  var answer = 0;
  while(true){

   if(a%2 == 1){
     a += 1;
   }
   if(b%2 == 1){
     b += 1;
   }
   if( a=== b){
     answer ++;
     break;
   }
   a= a/2
   b= b/2
   answer ++
  }
  return answer;
}
console.log(solution(8,4,7))
