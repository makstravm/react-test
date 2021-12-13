import { HasLapTOpType, makeHairStyle, moveUser, upgaradeLapTop, UserType } from './10_01'


test('reference type test', () => {
    const user: UserType = {
        name: 'Maksym',
        hair: 100,
        address: {
            city: 'Kharkov',
            number: 1
        }
    }
    const cutUser = makeHairStyle(user, 2)
    expect(user.hair).toBe(100)
    expect(cutUser.hair).toBe(50)
})

test('change address', () => {
    const user: HasLapTOpType = {
        name: 'Maksym',
        hair: 27,
        address: {
            city: 'Kharkov',
            number: 13
        },
        laptop: {
            title: 'Asus'
        }
    }

    const awesome = moveUser(user, 'Kiev')

    expect(user).not.toBe(awesome)
    expect(user.address).not.toBe(awesome.address)
    expect(user.laptop).toBe(awesome.laptop)
    expect(awesome.address.city).toBe('Kiev')
})

test('upgarade LapTop to MacBook', () => {
    const user: HasLapTOpType = {
        name: 'Maksym',
        hair: 27,
        address: {
            city: 'Kharkov',
            number: 13
        },
        laptop: {
            title: 'Asus'
        }
    }

    const userCopy = upgaradeLapTop(user, 'MacBook')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('MacBook')
})
