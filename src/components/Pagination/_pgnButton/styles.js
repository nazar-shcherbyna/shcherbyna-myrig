import styled from "styled-components";

export const StyledPGNButton = styled.div`
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #E4E4E4;
    border-radius: 4px;
    cursor: pointer;
    ${props => props.styles}

    &:not(:first-child) {
        margin-left: 12px;
    }
    
    .active {
        border: 1px solid #55A985;
        background-color: #55A985;
    }
`