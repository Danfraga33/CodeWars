function expressionMatter(a, b, c) {
  const expression1 = a * (b + c);
  const expression2 = a * b * c;
  const expression3 = a + b * c;
  const expression4 = (a + b) * c;
  const expression5 = a + b + c;

  return Math.max(expression1, expression2, expression3, expression4, expression5);
}

console.log(expressionMatter(2, 1, 2))
