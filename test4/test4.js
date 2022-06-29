function sumIntegers(list){
    list = list.map(a=> +(a));
    let numbers = list.filter(Boolean);
    let integers = numbers.filter(x=> (x ^ 0) === x);
    return integers.reduce((a,b)=> a+b);
}