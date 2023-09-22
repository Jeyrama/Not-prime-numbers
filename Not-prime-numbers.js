/*
You are given two positive integers a and b (a < b <= 20000). 
Complete the function which returns a list of all those numbers in the interval [a, b)
whose digits are made up of prime numbers (2, 3, 5, 7) but which are not primes themselves.
*/


// Solution

function notPrimes(a,b){
  let arr = []; 
  for (let i = a; i < b; i++){
    if (!/[014689]/.test(i)) {
      for (let j = 2; j <= Math.sqrt(i); j++){
        if (i % j === 0) { arr.push(i); break;}
      }
    }
  }
  return arr;
 }

 // or

 const notPrimes = (a, b) => {
  const prime = [2,3,5,7],
        len = b - a,
        resArr = [];
        
  const isNotPrime = num => {
    const top = num > 100 ? Math.ceil(Math.sqrt(num)) : num;
      
    for (let j = 2; j < top; j++) {
      if (num % j == 0) return true;
    }
    
    return false;
  };
  
  for (let i = 0; i < len; i++) {
    let el = a + i + '';
    
    if ([...el].every(n => prime.includes(+n))) {
      resArr.push(+el);
    }
  }

  return resArr.filter(n => isNotPrime(n));
}

// or

const notPrimes = (a, b) => {
  const result = [];
  for (let i = a; i < b; i++)
    if (String(i).split``.every(e => isPrime(e)) && !isPrime(i)) 
      result.push(i);
  return result;
}

const isPrime = n => {
  for (let i = 2, s = Math.sqrt(n); i <= s; i++)
    if (n % i === 0) 
      return false; 
  return n > 1;
}