// https://programmers.co.kr/learn/courses/30/lessons/12941
// 최솟값 만들기

// 효율성 불통
function solution(A,B){
  var answer = 0;
  A.sort((a,b)=>a-b);
  B.sort((b,a)=>b-a);
  for(let i = 0; i < A.length; i++){
    const a= A.indexOf(Math.max.apply(null,A))
    const b= B.indexOf(Math.min.apply(null,B))
    answer = answer + Math.max.apply(null,A)*Math.min.apply(null,B)
    A.splice(a,1);
    B.splice(b,1);
    i --
    if(!A.length) return answer;
  }
}


// 효율성 불통
function solution1(A,B){
  var answer = 0;
  A.sort((a,b)=>a-b);
  B.sort((a,b)=>b-a);
  console.log(A)
  console.log(B)
  for(let i = 0; i < A.length; i++){
    
    answer += A[i]*B[i];
  }
  return answer;
}

// 효율성 통과
function solution2(A,B){
  var answer = 0;
  A.sort((a,b)=>a-b);
  B.sort((a,b)=>b-a);
  return answer = A.reduce((a,b,i)=> a+ (b*B[i]),0)
}

let a= [1,4,2]
let b= [5,4,4]
console.log(solution2(a,b))