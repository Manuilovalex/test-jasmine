describe('isPrime function', function () {
  it('Вернуть false для чисел меньше или равных 1', function () {
    expect(isPrime(0)).toBe(false)
    expect(isPrime(1)).toBe(false)
  })

  it('Вернуть true для простых чисел', function () {
    expect(isPrime(2)).toBe(true)
    expect(isPrime(3)).toBe(true)
    expect(isPrime(5)).toBe(true)
    expect(isPrime(7)).toBe(true)
    expect(isPrime(11)).toBe(true)
  })

  it('Вернуть false для составыч чисел', function () {
    expect(isPrime(22)).toBe(false)
    expect(isPrime(4)).toBe(false)
    expect(isPrime(6)).toBe(false)
    expect(isPrime(8)).toBe(false)
    expect(isPrime(9)).toBe(false)
  })

  it('Вернуть false для отрицательных чисел', function () {
    expect(isPrime(-2)).toBe(false)
    expect(isPrime(-5)).toBe(false)
  })
})
