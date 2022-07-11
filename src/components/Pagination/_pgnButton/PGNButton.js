import React from 'react'
import { StyledPGNButton } from './styles'

const PGNButton = ({styles, children}) => {
    return (
        <StyledPGNButton styles={styles}>
            {children}
        </StyledPGNButton>
    )
}

export default PGNButton
