function getAlphabet(){
   
    let abc = [];
   for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) { 
     abc.push(String.fromCharCode(i)) }
    let ABC = abc.map(a => a.toUpperCase());
    let array = '[' + ABC.join(', ') + ']';
    return array;
    
}
