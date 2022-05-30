# Conjecture

For a given Collatz Conjecture dropping time `C(n)` for `n`, there is infinite amount of numbers `n + k * 2^w` that have the same dropping time.

Example: C(11) = C(11 + 2^5) = C(11 + 2 * 2^5) = C(11 + 3 * 2^5) and so on.

# Formula

`C(n) = C(n + k * 2^(C(n) - ⌈C(n) * (1 - log(3) / log(6))⌉ + 1))` where `k` is any whole number that satisfies that the parameter or C is a natural number.

This formula allows to get infinitely many other numbers that have the same dropping time as `n` **without bruteforce**.

`another_n_with_same_C = n + k * 2^(C(n) - ⌈C(n) * (1 - log(3) / log(6))⌉ + 1)`

*Note: This formula does not provide all numbers for the given dropping time, but a subset of number that repeat with the frequency of 2^k only.*

*Note: This formula is not proven, but is a result of observations.*

# Example

n = 11, C(11) = 8.

```
C(n) = C(n + k * 2^(C(n) - ⌈C(n) * 53 / 137⌉ + 1))
C(11) = C(11 + k * 2^(C(11) - ⌈C(11) * 53 / 137⌉ + 1))
8 = C(11 + k * 2^(8 - ⌈8 * 53 / 137⌉ + 1))
```

Let's test k = 3.

```
8 = C(11 + 3 * 2^(8 - ⌈8 * 53 / 137⌉ + 1))
8 = C(11 + 3 * 2^(8 - ⌈~3.094890510948905⌉ + 1))
8 = C(11 + 3 * 2^(8 - 4 + 1))
8 = C(11 + 3 * 2^5)
8 = C(11 + 3 * 32)
8 = C(11 + 96)
8 = C(107)
```

Another number that has a dropping time of 8 is 107.

# Tests
```
node test.js
```

The following setups are tested:

- `n` = `1 ... 100.000]` for `k` = `[1 ... 1000]`.
- `n` = `1 ... 100.000.000]` for `k` = `[1 ... 10]`.
- `n` = `1.000.000.000.000.000.000.000.000.000.000.000, ... 1.000.000.000.000.000.000.000.000.001.000.000]` for `k` = `[1 ... 10]`.

# Annex

## What is C(n)?

Given: n = 11.

Executing C(11):

```
1. 11 is odd  -> 11 * 3 + 1 = 34
2. 34 is even -> 34 / 2 = 17
3. 17 is odd  -> 17 * 3 + 1 = 52
4. 52 is even -> 52 / 2 = 26
5. 26 is even -> 26 / 2 = 13
6. 13 is odd  -> 13 * 3 + 1 = 40
7. 40 is even -> 40 / 2 = 20
8. 20 is even -> 20 / 2 = 10
```

Terminate: 10 is less or equal to 11. Took 8 steps to accomplish.

C(11) = 8.

