function getAlphabet(){
   
  let alpha = Array.from(Array(26)).map((e, i) => i + 65);
  let alphabet = alpha.map((x) => String.fromCharCode(x));
  return alphabet;
    
}
