import styled, { css } from "styled-components";

export const StyledRows = styled.tr`
    height: 48px;

    ${p => p.type === 'row' && css`
        &:nth-child(even) {
            background-color: #fafafa;
        }

        &:nth-child(odd) {
            background-color: #fff;
        }
    `}

    & .svg {
        width: 50px;
        text-align: center;
    }

    & .svg svg {
        fill: #4C4C4C;
    }

    & .svg svg:hover {
        fill: #82af00;
        cursor: pointer;
    }

    & .width-50 {
        width: 50px;
    }

    & .width-pr-15 {
        width: 15%;
    }

    & .width-pr-20 {
        width: 20%;
    } 
`