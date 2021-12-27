import styled from "styled-components";

export const StyledButton = styled.button`
    font-size: 14px;
    color: #fafafa;
    width: 214px;
    height: 48px;
    margin: 24px 0 24px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .1s ease-in-out;
    border: none;
    background-color: #55A985;
    box-shadow: 0px 6px 24px -12px rgba(0, 128, 73, 0.54);
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
        background: #60BE96;
        box-shadow: 0px 12px 36px -12px rgba(0, 128, 73, 0.54);
    }

    &:active {
        background-color: #3F8D6C;
    }
    
    &.disabled-btn {
        background-color: #C9C9C9;
        cursor: initial;
        box-shadow: none;
        user-select: none;
        pointer-events: none;
    }
`