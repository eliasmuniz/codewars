function spinWords(string){
    let words = string.split(" ");
    let wordsFinal = "";
  
    words.map((word)=>{
      if(word.length > 4){
        wordsFinal = wordsFinal+ word.split("").reverse().join("") + " ";
      }else{
         wordsFinal = wordsFinal + word + " "
      }
    })
      
    return  wordsFinal.toString().trim();
  }
  
  