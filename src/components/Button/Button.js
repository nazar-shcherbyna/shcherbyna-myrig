import React from 'react'; 
import { deleteSelectedRows } from '../../store/tableStore'
import { useSelector } from 'react-redux';
import { StyledButton } from './styles';

const DeleteSelectedRowsBtn = props => {
   const selectedRows = useSelector((state) => state.tableStore.checkedRows);
   const isDisable = !selectedRows.length;

    return (
        <StyledButton
            type="button" 
            className={isDisable ? 'disabled-btn' : ''}
            isDisable={isDisable}
            onClick={()=> props.dispatch(deleteSelectedRows())}
        >
            Удалить выбранные
        </StyledButton>
    )
};

export default DeleteSelectedRowsBtn;