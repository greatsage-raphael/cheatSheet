//filter array: filters based on a condition    This method-uses comparison operator && logical operators
 const numbers = [1,2,3,4,5,6,7,8,9,0]
 const filtered = numbers.filter(number => number < 9 && number % 2 === 0 && number !== 0);
 console.log(filtered)