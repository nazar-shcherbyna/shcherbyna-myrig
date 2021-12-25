import styled from "styled-components";

export const StyledMetricTabs = styled.div`
    width: 448px;
    height: 36px;
    box-sizing: border-box;
    border-radius: 6px;
    margin-bottom: 18px;
    display: flex;

    & > div {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        
        &:first-child {
            border-radius: 6px 0px 0px 6px;
            border: 1px solid #C9C9C9;
            border-right: none;
        }
        
        &:last-child {
            border-radius: 0 6px 6px 0;
            border: 1px solid #C9C9C9;
            border-left: none;
        }

        &.active {
            background: #55A985;
            border: 1px solid #55A985;
            color: #fff;
        }
    }
`