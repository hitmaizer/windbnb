import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { Search } from '@styled-icons/bootstrap/Search'
import { nanoid } from 'nanoid'
import { LocationPin } from '@styled-icons/entypo/LocationPin'
import { Close } from '@styled-icons/evaicons-solid/Close'
import Button from '@mui/material/Button';
import { PlusSquare } from '@styled-icons/fa-regular/PlusSquare'
import { MinusSquare } from '@styled-icons/fa-regular/MinusSquare'

export default function Searchbar(props) {
    const [state, setState] = React.useState(false)
    
    //your first function
    function toggleDrawer(open) {
        //your secound function
            return function (event) {
                return setState(open)
            }
        }

    return (
        <div className="searchbar__wrapper">
            <div className="navbar__search flex-row">
                    <div className="search__location">
                        <Button onClick={toggleDrawer(true)}> 
                            <input type="text" className="search__input" placeholder='Search Location' value={props.wordEntered} onChange={(e) => props.handleFilter(props.event, e)} />
                        </Button>
                        <Drawer
                            anchor={'top'}
                            open={state}
                            onClose={toggleDrawer(false)}
                        >
                        <div className="content__wrapper">
                            <div className="searchbar__wrapper searchbar__drawer">
                                <div className="navbar__search flex-row drawer">
                                    <div className="search__location">
                                        <input type="text" className="search__input input--drawer" placeholder='Search Location' value={props.wordEntered} onChange={(e) => props.handleFilter(props.event, e)} />
                                    </div>

                                    <div className="search__guests">
                                        <input type="number" className="search__input input--drawer" placeholder="Add guests" />
                                    </div>
                                    <div className="search__icon">
                                        {props.filteredData.length === 0 ? <Search size="24px" /> : <Close size="24px" id="clearBtn" onClick={props.clearInput} />}
                                    </div>
                                </div>
                            </div>
                            <div className="results flex-row">
                                {state === true && 
                                    <div className="data__result">
                                    {props.filteredData.map((value, key) => {
                                        return (
                                            <div className="result flex-row" key={nanoid()}>
                                                <LocationPin size="24px" className="result__icon" />
                                                <p className="result__text">{value.city}, {value.country}</p>
                                            </div>
                                        )
                                    })}
                                    </div> 
                                }

                                {state === true &&
                                <div className="guests__wrapper flex-col">
                                    <div className="guests__item flex-col">
                                        <h3 className="item__title">Adults</h3>
                                        <p className="item__description">Ages 13 or above</p>
                                        <div className="item__counter flex-row">
                                            <MinusSquare size="24px" className="counter__icon" id="minus1" onClick={props.removeAdult}/>
                                            <p className="counter__number" id="number">{props.countAdults}</p>
                                            <PlusSquare size="24px" className="counter__icon" id="plus1" onClick={props.addAdult}/>
                                        </div>
                                    </div>
                                    <div className="guests__item flex-col">
                                        <h3 className="item__title">Children</h3>
                                        <p className="item__description">Ages 2-12</p>
                                        <div className="item__counter flex-row">
                                            <MinusSquare size="24px" className="counter__icon" id="minus2" onClick={props.removeChild} />
                                            <p className="counter__number" id="number2">{props.countChildren}</p>
                                            <PlusSquare size="24px" className="counter__icon" id="plus2" onClick={props.addChild} />
                                        </div>
                                    </div>
                                </div>
                                }
                            </div>
                        </div>
            </Drawer>
                    </div>
                    <div className="search__guests">
                        <Button onClick={toggleDrawer(true)}>
                            <input type="number" className="search__input" placeholder="Add guests" />
                        </Button>
                    </div>
                    <div className="search__icon">
                        {props.filteredData.length === 0 ? <Search size="24px" /> : <Close size="24px" id="clearBtn" onClick={props.clearInput} />}
                    </div>
            </div>
                    <div className="results__container flex-row">
                        {props.filteredData.length !== 0 && 
                        <div className="data__result">
                            {props.filteredData.map((value, key) => {
                                return (
                                    <div className="result flex-row" key={nanoid()}>
                                        <LocationPin size="24px" className="result__icon" />
                                        <p className="result__text">{value.city}, {value.country}</p>
                                    </div>
                                )
                            })}
                        </div> 
                        }
                    </div>
                    
        </div>
    )
}