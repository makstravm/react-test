import React from 'react';


export type ManTypeProps = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManTypeProps
    food: Array<string>
    car: { model: string }
}

export const ManComponent: React.FC<PropsType> = (props) => {

    const { title, man } = props;



    return <div>
        <h1>{title}</h1>
        <div>{props.car.model}</div>
        <div>{man.name}</div>
    </div>
}