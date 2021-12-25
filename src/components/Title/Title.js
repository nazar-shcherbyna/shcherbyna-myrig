import React from 'react'
import { StyledTitle } from './styles'

const Title = props => {
    return (
        <StyledTitle>{props.children}</StyledTitle>
    )
}

export default Title
