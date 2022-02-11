import React from 'react';
import { ThemeProvider } from 'styled-components';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Theme from './theme/Theme'
import Data from './stays.json'


export default function App() {
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        const fetchedData = Data
        setData(fetchedData)
    }, [])

    console.log(data)

    return (
        <ThemeProvider theme={Theme}>
            <div className="page__wrapper">
                <Navbar data={data} />
                <Hero data={data} />
                <footer className="footer__sign">created by <b><u>Jose Alves</u></b> - devChallenges.io </footer>
            </div>
        </ThemeProvider>
    )
}