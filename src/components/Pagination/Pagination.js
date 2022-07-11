import React from 'react'
import { Arrow } from '../../icons'
import { StyledPagination } from './styles'
import PGNButton from './_pgnButton/PGNButton'

const Pagination = () => {

    const renderPagination = (array) => {
        if (array.length < 5) {
            return (
                <>
                    {array.map((el, idx) => (
                        <PGNButton key={idx}>
                            {idx}
                        </PGNButton>
                    ))}
                </>
            )
        } else if (array.length >= 5) {
            return (
                <>
                    {array.slice(0, 3).map((el, idx) => (
                        <PGNButton key={idx}>
                            {idx + 1}
                        </PGNButton>
                    ))}
                    <PGNButton styles={{border: '1px solid #fff', cursor: 'initial'}}>...</PGNButton>
                    <PGNButton>{array.length}</PGNButton>
                </>
            )
        }
    }

    return (
        <StyledPagination>
            <PGNButton>
                <Arrow />
            </PGNButton>
            {renderPagination([...new Array(20)])}
            <PGNButton>
                <Arrow type='right'/>
            </PGNButton>

        </StyledPagination>
    )
}

export default Pagination
