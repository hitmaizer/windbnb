import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { Search } from '@styled-icons/bootstrap/Search'
import { nanoid } from 'nanoid'
import { LocationPin } from '@styled-icons/entypo/LocationPin'
import { Close } from '@styled-icons/evaicons-solid/Close'
import Button from '@mui/material/Button';

export default function Searchbar(props) {
    const [filteredData, setFilteredData] = React.useState([])
    const [wordEntered, setWordEntered] = React.useState("")
    const [state, setState] = React.useState(false)
    const dataSearch = props.data

    const handleFilter = (event) => {
        const searchWord = event.target.value
        setWordEntered(searchWord)
        const newFilter = dataSearch.filter((value) => {
            return value.city.toLowerCase().includes(searchWord.toLowerCase())
        })
        if (searchWord === "") {
            setFilteredData([])
        } else {
            setFilteredData(newFilter)
        }
    }

    const clearInput = () => {
        setFilteredData([])
        setWordEntered("")
    }

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
                            <input type="text" className="search__input" placeholder='Search Location' value={wordEntered} onChange={handleFilter} />
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
                                        <input type="text" className="search__input" placeholder='Search Location' value={wordEntered} onChange={handleFilter} />
                                    </div>

                                    <div className="search__guests">
                                        <input type="text" className="search__input" placeholder="Add guests" />
                                    </div>
                                    <div className="search__icon">
                                        {filteredData.length === 0 ? <Search size="24px" /> : <Close size="24px" id="clearBtn" onClick={clearInput} />}
                                    </div>
                                </div>
                            </div>
                        </div>
            </Drawer>
                    </div>
                    <div className="search__guests">
                        <input type="text" className="search__input" placeholder="Add guests" />
                    </div>
                    <div className="search__icon">
                        {filteredData.length === 0 ? <Search size="24px" /> : <Close size="24px" id="clearBtn" onClick={clearInput} />}
                        
                    </div>
            </div>
                    {filteredData.length !== 0 && 
                    <div className="data__result">
                        {filteredData.map((value, key) => {
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
    )
}