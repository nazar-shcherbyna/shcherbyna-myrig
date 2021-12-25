import styled from "styled-components";

export const StyledCheckbox = styled.div`
    position: relative;
    width: 18px;
    height: 18px;
    border-radius: 6px;
    border: 2px solid #e8e8e8;
    margin: 0 22px;
    cursor: pointer;

    &.checked {
        border: 2px solid #55A985;
    }

    & > svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`