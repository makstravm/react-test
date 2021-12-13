import { calculator, div, mult, sub, sum } from './tasks'

test('sum', () => {
    // 1. тестовые дынные
    const a: number = 10
    const b: number = 5

    // 2. Выполнение теструемого кода
    const result = sum(a, b)

    // 3. Проверка ожидаемого результата
    expect(result).toBe(15)
})

test('div', () => {
    expect(div(10, 5)).toBe(2)
})

test('mult', () => {
    expect(mult(10, 5)).toBe(50)
})

test('sub', () => {
    expect(sub(10, 5)).toBe(5)
})

test('calculator', () => {
    expect(calculator(10, 5, { type: 'sum' })).toBe(15)
    expect(calculator(10, 5, { type: 'mult' })).toBe(50)
    expect(calculator(10, 5, { type: 'div' })).toBe(2)
    expect(calculator(10, 5, { type: 'sub' })).toBe(5)
})