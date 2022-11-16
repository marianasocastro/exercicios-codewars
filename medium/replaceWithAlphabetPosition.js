//In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// Exemple: "a" = 1, "b" = 2, etc.


function alphabetPosition(text) {
  
    let alphabet = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let response = [];
    
    for(let i = 0 ; i < text.length ; i++){
      if(alphabet.indexOf(text[i].toLowerCase()) != -1){
        response.push(alphabet.indexOf(text[i].toLowerCase())) 
      }
    }
            
    return response.join(' ');
}