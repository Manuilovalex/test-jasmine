describe('Age Classification', function () {
  it('Вывести null для значения n меньше 0', function () {
    expect(ageClassification(-1)).toBeNull()
  })

  it('Вывести детский возраст, n = 0 по 24', function () {
    expect(ageClassification(0.1)).toBe('детский возраст')
    expect(ageClassification(15)).toBe('детский возраст')
    expect(ageClassification(24)).toBe('детский возраст')
  })

  it('Вывести молодой возраст, n = 25 по 44', function () {
    expect(ageClassification(25)).toBe('молодой возраст')
    expect(ageClassification(35)).toBe('молодой возраст')
    expect(ageClassification(44)).toBe('молодой возраст')
  })

  it('Вывести средний возраст, n = 45 пo 65', function () {
    expect(ageClassification(45)).toBe('средний возраст')
    expect(ageClassification(55)).toBe('средний возраст')
    expect(ageClassification(65)).toBe('средний возраст')
  })

  it('Вывести пожилой возраст, n = 66 по 75', function () {
    expect(ageClassification(66)).toBe('пожилой возраст')
    expect(ageClassification(70)).toBe('пожилой возраст')
    expect(ageClassification(75)).toBe('пожилой возраст')
  })

  it('Вывести старческий возраст, n = 76 по 90', function () {
    expect(ageClassification(76)).toBe('старческий возраст')
    expect(ageClassification(85)).toBe('старческий возраст')
    expect(ageClassification(90)).toBe('старческий возраст')
  })

  it('Вывести долгожители, n = 91 по 122', function () {
    expect(ageClassification(91)).toBe('долгожители')
    expect(ageClassification(110)).toBe('долгожители')
    expect(ageClassification(122)).toBe('долгожители')
  })

  it('Вывести null, n = больше 122', function () {
    expect(ageClassification(123)).toBeNull()
    expect(ageClassification(150)).toBeNull()
  })
})
