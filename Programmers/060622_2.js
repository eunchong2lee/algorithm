function solution(number){
  var result = ''
  let repeatnumber = number/2;
  if(number%2===0){
    let one_line = '* '.repeat(repeatnumber)
    let two_line = ' *'.repeat(repeatnumber)
    result = (one_line+'\n' + two_line+'\n').repeat(repeatnumber)
  }else {
    let one_line = ' ' + '* '.repeat(repeatnumber)
    let two_line = '*' + ' *'.repeat(repeatnumber)
    result = one_line+'\n'+(two_line+'\n' + one_line+'\n').repeat(repeatnumber)
  }
  if (number === 1) result = '*'

  return result
}


console.log(solution(4))