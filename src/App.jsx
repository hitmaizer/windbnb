import React from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import Theme from './theme/Theme'


export default function App() {
    return (
        <ThemeProvider theme={Theme}>
            <div className="page__wrapper">
                <Navbar />
            </div>
        </ThemeProvider>
    )
}