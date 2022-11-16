// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.


function duplicateCount(text){
  
    let letters = []
    let count = 0
    
    text = text.toLowerCase()
    
    for(let i=0 ; i < text.length ; i++){
      for(let j=i+1 ; j < text.length ; j++){
        if(text[i] == text[j] && letters.indexOf(text[i]) == -1){
          count += 1
          letters.push(text[i])
          
        }
      }
    }
    return count  
}