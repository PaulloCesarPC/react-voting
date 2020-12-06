import React from 'react'
import css from './card.module.css'


export default function Card({children}) {

    const clases = `card ${css.cardExtra}`
    return (
        <div className={clases}>
            {children}
        </div>
    )
}
