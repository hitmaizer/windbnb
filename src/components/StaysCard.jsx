import React from 'react';
import { StarFill } from '@styled-icons/bootstrap/StarFill'
import StyledCard from '../elements/StyledCard'

export default function StaysCard() {
    return (
        <StyledCard className="card__wrapper">
            <img src="images/test.jpg" alt="" className="card__img" />
            <div className="stays__details flex-row">
                <div className="details__left flex-row">
                    <div className="host__badge">
                        <h6 className="badge__text">SUPER HOST</h6>
                    </div>
                    <p className="details__description">Entire apartment. 2 beds</p>
                </div>
                <div className="details__right flex-row">
                    <StarFill size="16px" className="rating__icon"/>
                    <p className="details__rating">4.40</p>
                </div>
            </div>
            <h3 className="stays__title">Stylist apartment in center of the city</h3>
        </StyledCard>
    )
}