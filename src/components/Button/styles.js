import styled from "styled-components";

export const StyledButton = styled.button`
    font-size: 14px;
    color: #fff;
    background-color: #0085be;
    padding: 16px 39px;
    margin: 24px 0;
    border-radius: 6px;
    float: right;
    transition: all .3s ease-in-out;
    border: solid 2px #0085be;
    cursor: 'pointer';

    &:hover {
        color: #fff;
        border: solid 2px #02597e;
        background-color: #02597e;
    }

    &:focus {
        background-color:#002abe;
    }
    
    &.disabled-btn {
        color: #dadada;
        background-color: #fff;
        border: solid 2px #dadada;
        cursor: initial;
    }
`