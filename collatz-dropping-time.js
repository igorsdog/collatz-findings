
/**
 * Finds Collatz Conjecture dropping time for N.
 * 
 * @param n BigInt, natural number
 * @returns Number, natural number, amount of steps
 */
module.exports = n => {
  let currentN = n
  let steps = 0

  while (true) {
    steps++

    if (currentN % BigInt(2) === BigInt(0)) {
      currentN = currentN / BigInt(2)
    } else {
      currentN = BigInt(3) * currentN + BigInt(1)
    }

    if (currentN <= n) {
      break;
    }
  }

  return steps
}
