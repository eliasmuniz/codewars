function highAndLow(numbers){  
    var arrayNumbers = numbers.split(' ');
    var max = Math.max.apply(null, arrayNumbers);
    var min = Math.min.apply(null, arrayNumbers);
  
    return `${max} ${min}`;
  
  }