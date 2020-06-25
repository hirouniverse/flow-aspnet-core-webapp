function square(n) {
  console.log(n);
  return n * n;
}

square(2); // Error!

function multiple(n) {
  console.log(n);
  return Number(n);
}

multiple("23");