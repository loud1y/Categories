import React, {useEffect, useState} from 'react';
import classes from "./Card.module.css"

const Card = (props) => {

    const [scale, setScale] = useState(0)

    const hideCard = () => {
        setScale(0)
    }

    useEffect(() => {
        setTimeout(()=>{
            setScale(1)
        }, props.delay)
    }, [])

    return (
        <div className={classes.card} style={{background: props.color, transform: `scale(${scale})`}}>
            <button onClick={()=> hideCard()} className={classes.closeButton}>X</button>
            <h3>{props.title}</h3>
            <span className={classes.cardContent}>{props.content}</span>
            {props.button}
        </div>
    );
};

export default Card;