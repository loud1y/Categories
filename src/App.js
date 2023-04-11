import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './layout/Header'
import Categories from './pages/Categories'
import AddCategory from './pages/AddCategory'


class App extends React.Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path='/listCategories' element={<Categories/>} />
                        <Route path='/addCategory' element={<AddCategory/>} />
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
}
export default App;