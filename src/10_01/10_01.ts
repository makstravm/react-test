export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        number: number
    }
}

export type LapTopType = {
    title: string
}
export type HasLapTOpType = UserType & {
    laptop: LapTopType

}
export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }

    return copy
}
export function moveUser(u: HasLapTOpType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
}
export function upgaradeLapTop(u: HasLapTOpType, title: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: title
        }
    }
}
