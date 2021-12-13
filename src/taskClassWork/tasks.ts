export function sum(a: number, b: number) {
    return a + b
}

export function mult(a: number, b: number) {
    return a * b
}

export function div(a: number, b: number) {
    return a / b
}

export function sub(a: number, b: number) {
    return a - b
}

export type ActionCalculator = {
    type: 'sum' | 'mult' | 'div' | 'sub'
}

export function calculator(a: number, b: number, action: ActionCalculator) {
    const typeAction = {
        sum: () => a + b,
        mult: () => a * b,
        div: () => a / b,
        sub: () => a - b,
    }
    return typeAction[action.type]()
}

calculator(5, 5, { type: 'sum' })
calculator(5, 5, { type: 'mult' })
calculator(5, 5, { type: 'div' })
calculator(5, 5, { type: 'sub' })