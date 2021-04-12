import React from 'react';
import { TableHead } from './_thead/_thead'
import { TableRows } from './_rows/_rows'
import { useDispatch, useSelector} from 'react-redux';
import { selectRow, selecteAllRows, deleteRow } from '../../store/tableStore';
import { Loader } from '../../components';

const Table = props => {

    const { tableData, checkedRows, isLoading, currentUSD } = useSelector((state) => state.tableStore);
    const dispatch = useDispatch();

    const selectRowHandler = (id) => {
        dispatch(selectRow(id));
    };

    const selecteAllRowsHandler = () => {
        dispatch(selecteAllRows());
    };

    const deleteRowHandler = (id) => {
        dispatch(deleteRow(id));
    };
  
 
    return(
        <>
        <table className="table">
            <thead>
                <TableHead 
                   selecteAllRowsHandler={selecteAllRowsHandler} 
                   tableData={tableData}
                   checkedRows={checkedRows}/>
            </thead>
            <tbody className="users" >
                <TableRows 
                    selectRowHandler={selectRowHandler} 
                    deleteRowHandler={deleteRowHandler} 
                    tableData={tableData}
                    currentUSD={currentUSD}
                    checkedRows={checkedRows}/>
            </tbody>
        </table>
        { isLoading && <Loader/> }
        </>
    )
};

export default Table;


