/* eslint-disable array-callback-return */
/* eslint-disable no-restricted-globals */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Theme from './theme/Theme'
import Data from './stays.json'


export default function App() {
    const [data, setData] = React.useState([])
    const [filteredData, setFilteredData] = React.useState([])
    const [wordEntered, setWordEntered] = React.useState("")
    const [adultCount, setAdultCount] = React.useState(0)
    const [childrenCount, setChildrenCount] = React.useState(0)
    

    React.useEffect(() => {
        const fetchedData = Data
        setData(fetchedData)
    }, [])


    const handleFilter = (e) => {
        const searchWord = event.target.value
        setWordEntered(searchWord)
        const newFilter = data.filter((value) => {
            if(value.maxGuests > adultCount + childrenCount) {
                return value.city.toLowerCase().includes(searchWord.toLowerCase())
            }
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
    

    return (
        <ThemeProvider theme={Theme}>
            <div className="page__wrapper">
                <Navbar data={data} 
                handleFilter={() => handleFilter()} 
                filteredData={filteredData} 
                wordEntered={wordEntered} 
                clearInput={clearInput} 
                addAdult={() => setAdultCount(adultCount + 1)} 
                removeAdult={() => setAdultCount(() => {
                    if(adultCount > 0) {
                        return adultCount - 1
                    } else {
                        return adultCount
                    }
                })}
                addChild={() => setChildrenCount(childrenCount + 1)}
                removeChild={() => setChildrenCount(() => {
                    if(childrenCount > 0) {
                        return childrenCount - 1
                    } else {
                        return childrenCount
                    }
                })}
                countAdults={adultCount}
                countChildren={childrenCount}/>
                <Hero data={data} filteredData={filteredData} />
                <footer className="footer__sign">created by <b><u>Jose Alves</u></b> - devChallenges.io </footer>
            </div>
        </ThemeProvider>
    )
}