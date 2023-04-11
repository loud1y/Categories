import React from 'react';
import Card from "./ui/card/Card";
import classes from "./Components.module.css"

const CardList = (props) => {

    return (
        <div className={classes.cardList}>
            {props.cards.map((card, idx) =>
                <Card key={card.id} title={card.title} content={card.content} color={props.colors[idx]} delay={100 * idx}/>
            )}
        </div>
    );
};

export default CardList;