function narcissistic(value) {
    // Code me to return true or false
    let objChars = [];
    let total = 0;

    if(value.toString().length > 1){
      for (var i = 0; i < value.toString().length; i++) {
          objChars.push(value.toString().charAt(i));
          total = total + parseInt(value.toString().charAt(i) ** value.toString().length);
          console.log(i,total);

      }
      
      console.log(total);
      console.log(value);
      if(value===total){
        return true
      }else{
        return false
      }
    }else{
      return true
    }


  
  }

  console.log(narcissistic(371))

  //Elegant way:
  function narcissistic( value ) {
    return ('' + value).split('').reduce(function(p, c){
      return p + Math.pow(c, ('' + value).length)
      }, 0) == value;
  }