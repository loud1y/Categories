import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <nav className={"w-100"}>
                <Link to={`/listCategories`}>Список категорий </Link>
            </nav>
        );
    }
}

export default Header;