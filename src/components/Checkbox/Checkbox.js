import React from 'react';
import { CheckMark } from '../../icons';
import { StyledCheckbox } from './styles';



const Checkbox = ({checked, selectedHandler}) => {
  
    return (
        <StyledCheckbox 
            onClick={selectedHandler}
            checked={checked}
        >
            {checked 
                ? <CheckMark/>
                : null
            }
        </StyledCheckbox>
    )
};

export default Checkbox