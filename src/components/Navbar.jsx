import React from 'react';
import Searchbar from './Searchbar';

export default function Navbar(props) {
    return (
        <nav className="navbar flex-row">
            <div className="navbar__logo">
                <img src="images/logo.svg" alt="" className="navbar__img" />
            </div>
            <Searchbar data={props.data}/>
        </nav>
    )
}