let n = prompt(
  "Hi, friend! \nEnter a number N, greater than 1. \nAnd the function returns the N-th Fibonacci number."
);
if (n) {
  alert("The " + n + "-th Fibonacci number is " + cycle(n) + ".");
} else {
  alert("You didn`t enter number N.");
}
function cycle(n) {
  let x = [0, 1];
  for (let i = 2; i <= n; i++) {
    let prevN1 = x[i - 1];
    let prevN2 = x[i - 2];
    x.push(prevN1 + prevN2);
  }
  return x[n];
}
