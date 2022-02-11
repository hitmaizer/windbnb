import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './theme/Theme'


export default function App() {
    return (
        <ThemeProvider theme={Theme}>
            <h1>Hello mate!</h1>
        </ThemeProvider>
    )
}