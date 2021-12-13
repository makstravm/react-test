export type UsersType = {
    [key: string]: { id: number, name: string }
}

let usersd: UsersType

beforeEach(() => {
    usersd = {
        '101': { id: 101, name: 'Dimych' },
        '3232312': { id: 3232312, name: 'Nataliya' },
        '12': { id: 12, name: 'Maksym' },
        '1': { id: 1, name: 'Alexey' }
    }
})

test('Should select corresponding user ', () => {
    usersd['1'].name = 'Ekaterina'

    expect(usersd['1'].name).toBe('Ekaterina')

})

test('Should delect corresponding user ', () => {
    delete usersd['1']

    expect(usersd['1']).toBeUndefined()

})