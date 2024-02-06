// Функция проверки числа на простое или составное, принимаемое числоо должно быть больше 1.

/**
 *
 * @param {number}  num
 * @returns {boolean} true, false
 */

const isPrime = (num) => {
  let result

  if (num <= 1) {
    return false
  }

  for (let counter = 2; counter <= Math.sqrt(num); counter++) {
    result = num % counter
    if (result === 0) {
      return false
    }
  }
  return true
}
console.log(isPrime(22))
console.log(isPrime(7))
console.log(isPrime(8))
console.log(isPrime(157))
console.log(isPrime(155))
console.log(isPrime(45))
console.log(isPrime(2))
console.log(isPrime(-2))
console.log(isPrime(-72))
