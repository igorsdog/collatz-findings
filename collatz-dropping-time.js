
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

    if (currentN % 2n === 0n) {
      currentN = currentN / 2n
    } else {
      currentN = 3n * currentN + 1n
    }

    if (currentN <= n) {
      break;
    }
  }

  return steps
}
