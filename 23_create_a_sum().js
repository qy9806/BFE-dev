function sum(num) {
    const func=function(num2){
      return num2 ? sum(num2+num):num //recursion to keep sum function
    }
    func.valueOf=()=>num // the function is returning a function, set the value back to a num
    return func
  }