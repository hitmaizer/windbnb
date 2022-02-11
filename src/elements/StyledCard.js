import styled from "styled-components";

export default styled.div`
    display: flex;
    flex-direction: column;
    width: 395px;

    .card__img {
        max-height: 269px;
        width: 395px;
        border-radius: 24px;
        object-fit: cover;
    }

    .stays__details {
        align-items: center;
        justify-content: space-between;
        margin-top: 16px;
    }

    .details__left {
        align-items: center;
        gap: 12px;
    }

    .host__badge {
        border: solid 1px ${(props) => props.theme.colors.mediumGray};
        border-radius: 12px;
        padding: 8px 12px;
    }

    .badge__text {
        font-family: ${(props) => props.theme.fonts.montserrat};
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        color: ${(props) => props.theme.colors.mediumGray};
    }

    .details__description {
        font-family: ${(props) => props.theme.fonts.montserrat};
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: ${(props) => props.theme.colors.lightGray};
    }

    .rating__icon {
        color: ${(props) => props.theme.colors.primary};
    }

    .details__rating {
        font-family: ${(props) => props.theme.fonts.montserrat};
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        margin-left: 8px;
        color: ${(props) => props.theme.colors.mediumGray};
    }

    .stays__title {
        font-family: ${(props) => props.theme.fonts.montserrat};
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: ${(props) => props.theme.colors.darkGray};
        margin-top: 12px;
    }

`