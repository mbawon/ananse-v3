import React from 'react'
import styles from './card.module.css'

const Card = ({title, value}) =>{
    return(
        <div className={styles.card}>
            <p style={{fontSize:30, marginBottom:10}}>{value}</p>
            <div className={styles.cardTitle}>
                {title}
            </div>
        </div>
    )
}

export default Card