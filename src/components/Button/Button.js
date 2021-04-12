import React from 'react'; 
import { deleteSelectedRows } from '../../store/tableStore'
import { useSelector } from 'react-redux';
import classNames from 'classnames';





const DeleteSelectedRowsBtn = props => {
   const selectedRows = useSelector((state) => state.tableStore.checkedRows);
   const isDisabled = !selectedRows.length;
    return (
        <>
        <button 
            className={classNames({
             "button-del": true,
             "disabled-btn": isDisabled,
            })}
            type="button" 
            disabled={isDisabled}
            onClick={()=> props.dispatch(deleteSelectedRows())}
            >
            Удалить выбранные
        </button>
        </>
    )
};

export default DeleteSelectedRowsBtn;