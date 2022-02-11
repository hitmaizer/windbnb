import React from 'react'
import { Search } from '@styled-icons/bootstrap/Search'


export default function Searchbar() {
    return (
        <div className="navbar__search flex-row">
                <div className="search__location">
                    <input type="text" className="search__input" placeholder='Search Location' />
                </div>
                <div className="search__guests">
                    <input type="text" className="search__input" placeholder="Add guests" />
                </div>
                <div className="search__icon">
                    <Search size="24px" />
                </div>
        </div>
    )
}