import React from 'react';
import { StarFill } from '@styled-icons/bootstrap/StarFill'
import StyledCard from '../elements/StyledCard'

export default function StaysCard(props) {
    return (
        <StyledCard className="card__wrapper">
            <img src={props.image} alt="" className="card__img" />
            <div className="stays__details flex-row">
                <div className="details__left flex-row">
                    {props.superHost && 
                    <div className="host__badge">
                        <h6 className="badge__text">SUPER HOST</h6>
                    </div>}
                    
                    <p className="details__description">{props.type} {props.beds && `${props.beds} beds`}</p>
                </div>
                <div className="details__right flex-row">
                    <StarFill size="16px" className="rating__icon"/>
                    <p className="details__rating">{props.rating}</p>
                </div>
            </div>
            <h3 className="stays__title">{props.title}</h3>
        </StyledCard>
    )
}