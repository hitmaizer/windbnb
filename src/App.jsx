import React from 'react';
import { ThemeProvider } from 'styled-components';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Theme from './theme/Theme'


export default function App() {
    return (
        <ThemeProvider theme={Theme}>
            <div className="page__wrapper">
                <Navbar />
                <Hero />
                <footer className="footer__sign">created by <b><u>Jose Alves</u></b> - devChallenges.io </footer>
            </div>
        </ThemeProvider>
    )
}