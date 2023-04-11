import React from 'react';

// импорт компонента CategoryData
import Category from '../components/category/Category';

import http from "../http-common";

import { Link } from 'react-router-dom';

class Categories extends React.Component {
    // объект state описывает внутреннее состояние компонент (аналог data во Vue.js)
    state = {
        categories: [],
    };

    // обработчик, который срабатывает до вызова render()
    componentDidMount() {
        http
            .get("/listCategories")
            .then(response => {
                // обновление состояния
                this.setState({ categories: response.data })
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { categories } = this.state;

        var list = [];
        for (var i in categories) {
            list.push(
                <Category key={i} id={categories[i].id} content={categories[i].name}/>
            )
        }
        return <div className={"d-flex flex-wrap"}>
            <Link to={`/addCategory`}>Добавить категорию </Link>
            {list.length ? list : "Подождите, идёт загрузка данных"}
        </div>
    }
}

export default Categories;