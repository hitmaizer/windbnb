import React from 'react';
import StaysCard from '../components/StaysCard'

export default function Hero() {
    return (
        <div className="hero__wrapper">
            <div className="hero__titles flex-row">
                <h1 className="hero__title">Stays in Finland</h1>
                <h5 className="hero__count">12+ stays</h5>
            </div>
            <div className="stays__section">
                <StaysCard />
                <StaysCard />
                <StaysCard />
                <StaysCard />
                <StaysCard />
                <StaysCard />
            </div>
        </div>
    )
}