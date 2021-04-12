import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchData, fetchConvertEurToUsd } from './store/tableStore'
import { Table } from './components'
import { DeleteSelectedRowsBtn } from './components';


const App = props =>    {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchData());
        dispatch(fetchConvertEurToUsd());
    }, [dispatch]);
   
    return (
        <div className="my-app">
            <h1 className="table__title">Таблица пользователей</h1>
            <Table />
            <DeleteSelectedRowsBtn dispatch={dispatch}/>
        </div>
    )
}

export default App;
