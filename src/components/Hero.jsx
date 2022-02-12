import React from 'react';
import StaysCard from '../components/StaysCard'
import { nanoid } from 'nanoid'

export default function Hero(props) {

    const cardElements = props.filteredData.map(work => <StaysCard 
        key={nanoid()}
        superHost={work.superHost}
        beds={work.beds}
        type={work.type}
        rating={work.rating}
        title={work.title}
        image={work.photo}
    
    />)
    
    return (
        <div className="hero__wrapper">
            <div className="hero__titles flex-row">
                <h1 className="hero__title">Stays in Finland</h1>
                <h5 className="hero__count">12+ stays</h5>
            </div>
            <div className="stays__section">
                {cardElements}
            </div>
        </div>
    )
}