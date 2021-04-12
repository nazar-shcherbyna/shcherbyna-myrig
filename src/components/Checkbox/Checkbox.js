import React from 'react';



const Checkbox = props => {
  
    return (
        <div className="checkbox">
            <input className="checkbox__input" 
                   type="checkbox" id={`checkbox_${props.id}`}
                   onChange={props.selectedHandler}
                   checked={props.checked}
            />    
            <label className="checkbox__label" htmlFor={`checkbox_${props.id}`}></label>                                 
        </div>
    )
};

export default Checkbox