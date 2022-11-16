function stringToArray(string){

    let arr = [];
    let word = '';
    
    for(let i=0 ; i <= string.length ; i++){
      if(string[i] == ' ' || i == string.length){
        arr.push(word)
        word = ''
      } else{
        word += string[i]
      }
    }
    
    return arr
}