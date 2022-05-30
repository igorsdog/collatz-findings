const getRepetitivePowerOfTwo = require('./power-formula')
const findAmountOfStepsForNToReachItselfOrLower = require('./collatz-formula')

/** 
 * @param startWithN BigInt
 * @param testAmountOfNs BigInt
 * @param testDepth Number, how many times to add 2^k and test the amount of steps
 * @returns Boolean, true if test passes
 */
const testRepetitivePowerOfTwo = (startWithN, testAmountOfNs, testDepth) => {
  console.log('Test is running, this can take time...')

  const testUpToNs = startWithN + testAmountOfNs
  let errorsAmount = 0

  for (let n = startWithN; n <= testUpToNs; n++) {
    // Calculating the amount of steps for N so it reaches itself or a lower number
    const steps = findAmountOfStepsForNToReachItselfOrLower(n)
    // Getting the power of two, so we can add a power of 2 to N a number of times and test for the same amount of steps
    const repetitivePowerOfTwo = getRepetitivePowerOfTwo(steps)

    let nextN = n

    // Checking amount of steps by adding the power of two a number of times
    for (let powerOfTwoAdditionIteration = 1; powerOfTwoAdditionIteration <= testDepth; powerOfTwoAdditionIteration++) {
      // Adding a power of 2
      nextN += BigInt(Math.pow(2, repetitivePowerOfTwo))
      // Getting the amount of steps for the new N
      const stepsForNextN = findAmountOfStepsForNToReachItselfOrLower(nextN)

      // If steps do not match, yield an error
      if (steps !== stepsForNextN) {
        errorsAmount++

        console.error(`Formula doesn't work for N = ${n} (steps ${steps}). It found the power of two as ${repetitivePowerOfTwo}, we added ${powerOfTwoAdditionIteration} * 2^${repetitivePowerOfTwo} and for the new N = ${nextN} the amount of steps appeared to be ${stepsForNextN}, not ${steps}`)
      }
    }
  }

  const testPassed = errorsAmount === 0

  if (testPassed) {
    console.log('🟢 Test passed')
  } else {
    console.log('🔴 Test failed')
  }

  return testPassed
}

testRepetitivePowerOfTwo(BigInt(1), BigInt(100000), 1000)
testRepetitivePowerOfTwo(BigInt(1), BigInt(10000000), 10)
testRepetitivePowerOfTwo(BigInt(1000000000000000000000000000000000), BigInt(1000000), 10)
