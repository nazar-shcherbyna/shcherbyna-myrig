import classNames from 'classnames';
import React from 'react';
import { CheckMark } from '../../icons';
import { StyledCheckbox } from './styles';



const Checkbox = props => {
  
    return (
        <StyledCheckbox 
            onClick={props.selectedHandler}
            className={classNames({
                'checked': props.checked
            })}
        >
            {props.checked 
                ? <CheckMark/>
                : null}
        </StyledCheckbox>
    )
};

export default Checkbox