import React from 'react'
import { MyCard } from './MyCard'


export const Home = (props) => {

    let ind = 0;
    const cardElemets = props.myArr.map(item => {
        ind++;
        return <MyCard item={item} id={ind} key={ind} />
    })

    return (
        <div className='grid--container'>
            {props.myArr.length !== 0 && cardElemets}
        </div>
    )
}
