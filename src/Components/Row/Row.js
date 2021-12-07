import React from "react";
import './Row.css'


const Row = (props) => {
    return (
        <div className='row'>
            <div className='cell'>{props.hero.id}</div>
            <div className='cell'>{props.hero.name}</div>
            <div className='cell'>{props.hero.power}</div>
            <div className='cell'>{props.hero.status}</div>
        </div>
    )
}

export default Row;