/**
 * Finds a power of two for a given dropping time
 * so any amount of 2 in that power can be added to (or subtracted from) N,
 * so the dropping time for the new number will be the same as for N (conjecture).
 * 
 * @param steps Number, natural number
 * @returns Number, power of two
 */
 module.exports = steps => steps - Math.ceil(steps * 53 / 137) + 1
