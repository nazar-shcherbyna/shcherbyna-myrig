import React from 'react'
import { StyledPGNButton } from './styles'

const PGNButton = (props) => {
    return (
        <StyledPGNButton styles={props.styles}>
            {props.children}
        </StyledPGNButton>
    )
}

export default PGNButton
