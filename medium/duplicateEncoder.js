//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" 
// if that character appears only once in the original string, or ")"
// if that character appears more than once in the original string. 
// Ignore capitalization when determining if a character is a duplicate.



function duplicateEncode(word){
    
    let newWord = '';
    let count = 0 ;
    
    word = word.toLowerCase()
    
    for(let i=0 ; i < word.length ; i++){
      for(let j=0 ; j < word.length ; j++){
        if(word[i] == word[j] && i != j){
          count += 1 
        }
      }
      if(count == 0){
        newWord += "("
      } else {
        newWord += ")"
      }
      count = 0
    }
    
   
    return newWord
}