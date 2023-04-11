import React from 'react';

import http from "../http-common";

import { Navigate } from 'react-router-dom';

class AddCategory extends React.Component {
    constructor() {
        super();

        this.state = {
            name: "",
            submitted : false
        };
        // делаем привязку к функции контекста this
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Поскольку атрибут value используется в форме, требуется при каждом изменении значения обновлять состояние React-компонента.
    handleChange(event) {
        this.setState({name: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        var data = {
            name: this.state.name
        };
        http
            .post("/addCategory", data)
            .then(() => { // запрос выполнился успешно
                this.setState({submitted: true}); // переходим к списку категорий
            })
            .catch(e => { // при выполнении запроса возникли ошибки
                console.log(e);
            });
    }

    render() {

        return !this.state.submitted
            ? <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" value={ this.state.name} placeholder="Наименование категории" onChange={this.handleChange}/>
                <input type="submit" value="Добавить" />
            </form>
            : <Navigate to="/listCategories" /> // автоматически переходим по ссылке
    }
}

export default AddCategory;