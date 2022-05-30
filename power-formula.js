/**
 * Finds a power of two for a given amount of steps S(n)
 * so any amount of 2 in that power can be added to (or subtracted from) N,
 * and the steps S(m) for the new number will be the same (conjecture).
 * 
 * @param steps Number, natural number
 * @returns Number, power of two
 */
 module.exports = steps => steps - Math.ceil(steps * 53 / 137) + 1
