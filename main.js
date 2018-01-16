function differenceOfSquares(x){
  var total = 0;
  var subtract = 0
  for (var i = 1; i <= x; i++) {
    total += i;
    subtract += (i * i);
  }
  total = total * total;
  return total - subtract;
}