function calculate(expression) {
  try {
    var result = eval(expression);
    if (!isFinite(result)) return "Error";
    return +result.toFixed(10) + "";
  } catch (e) {
    return "Error";
  }
}
function add(num){
  if(num % 3 == 0){
    return "fizz";
  }else if(num % 5 == 0){
    return "buzz";
  }else if(num % 3 == 0 && num % 5 == 0) {
    return "Fizzbuzz";
  } else{
    return "no number";
  }
}