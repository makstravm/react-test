function icreaseAge(user: UserType) {
    return user.age++
}

type UserType = {
    name: string
    age: number
    address: { title: string }
}

test('big reference type test', () => {
    let user: UserType = {
        name: 'Maksym',
        age: 27,
        address: {
            title: 'aa'
        }
    }
    icreaseAge(user)
    const superman = user;
    superman.age = 1000
    expect(user.age).toBe(1000)
})


test('array test', () => {
    let users = [
        {
            name: 'Maksym',
            age: 27
        },
        {
            name: 'Alexey',
            age: 27
        }
    ]


    let admins = users;
    admins.push({ name: 'Sechka', age: 10 })

    expect(users[2]).toEqual({ name: 'Sechka', age: 10 })
})

test('value type test', () => {
    let usersCount = 100;
    let adminsCount = usersCount;

    adminsCount++
    expect(adminsCount).toBe(101)
})

test('big reference type test', () => {
    let user =
    {
        name: 'Maksym',
        age: 27,
        address: { title: 'Kharkov' }

    }

    let addAdr = user.address

    let usertwo: UserType = {
        name: 'Viktoria',
        age: 25,
        address: user.address
    }
    user.address.title = 'Maldivi'

    expect(user.address.title).toBe('Maldivi')
    expect(usertwo.address.title).toBe('Maldivi')
})

test('big reference type array test', () => {
    const address = 'Verbovka'
    let user =
    {
        name: 'Maksym',
        age: 27,
        address: address

    }

    let usertwo = {
        name: 'Viktoria',
        age: 25,
        address: address
    }
    const users = [user, usertwo, { name: 'Liza', age: 20, address: address }]
    const admins = [user, usertwo]
    admins[0].name = 'Max'

    expect(users[0].name).toBe('Max')
    expect(user.name).toBe('Max')
})

test('sort array test', () => {
    const letters = ['f', 'a', 'r', 'b']
    letters.sort()
    expect(letters).toEqual(['a', 'b', 'f', 'r'])
})
