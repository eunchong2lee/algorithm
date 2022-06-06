// https://programmers.co.kr/learn/courses/30/lessons/42587?language=javascript


function solution(priorities, location) {
  var answer = 0;
  let newarray = [];
  let resultarray =[];
  for (let i = 0; i < priorities.length; i++) {
    newarray.push([priorities[i],i])
    // const findvalue = newarray.find((element)=> element[0]>priorities[i])
    // if(findvalue) newarray.push([priorities[i], i+1]);
    // else if(!findvalue) newarray.unshift([priorities[i],i+1]);
    // console.log(newarray)
  }
  console.log(newarray)
  for (let l = 0; l < newarray.length; l++){
    const findvalue = newarray.find((element)=> element[0]>priorities[l])
    const findvalue2 = newarray.find((element)=> element[0]!==priorities[l])
    console.log(findvalue2)
    if(newarray.find((element)=> element[0]>priorities[l])){
      newarray.push(newarray[0]);
      newarray.shift();
      l--
    }  
    if(!(newarray.find((element)=> element[0]>priorities[l]))){
      resultarray.push(newarray[0]);
      newarray.shift();
      l--;
      if(!findvalue2) {
        l = newarray.length;
      } 
    }
  }
  console.log(newarray);
  for( let j=0; j<newarray.length; j++){
    resultarray.push(newarray[j]);
  }
  for(let k=0; k<resultarray.length; k++){
    if(resultarray[k][1]=== location){
      answer = k+1
    }
  }
  console.log(answer);

  return answer;
}

let priorities = [2,1,3,2]
let location = 2
let priorities2 = [1,1,9,1,1,1]
let location2 = 0
// solution(priorities, location)
solution(priorities2, location2)

// push unshift