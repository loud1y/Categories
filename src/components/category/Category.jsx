import React from 'react';
import classes from "../Components.module.css"
import Button from "../ui/button/Button";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";

const Category = (props) => {

    const navigate = useNavigate()

    return <div id={props.id} className={classes.categoryContainer}>
        <div className={classes.category}>
            <div>{props.content}</div>
            <div>{props.children}</div>
            <Button onClick={() => navigate(`/category/${props.id}`)}>
                Открыть
            </Button>
        </div>
    </div>
};

export default Category;