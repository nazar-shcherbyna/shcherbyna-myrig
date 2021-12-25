import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchData, fetchConvertEurToUsd } from './store/tableStore'
import { Table } from './components'
import { DeleteSelectedRowsBtn } from './components';
import Title from './components/Title/Title';


const App = props =>    {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchData());
        dispatch(fetchConvertEurToUsd());
    }, [dispatch]);
   
    return (
        <div className="my-app">
            <Title>Таблица пользователей</Title>
            <Table />
            <DeleteSelectedRowsBtn dispatch={dispatch}/>
        </div>
    )
}

export default App;
