import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchData, fetchConvertEurToUsd } from './store/tableStore'
import { Table } from './components'
import { DeleteSelectedRowsBtn } from './components';
import Title from './components/Title/Title';
import MetricTabs from './components/MetricTabs/MetricTabs';
import Pagination from './components/Pagination/Pagination';


const App = props =>    {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchData());
        dispatch(fetchConvertEurToUsd());
    }, [dispatch]);
   
    return (
        <div className="my-app">
            <Title>Таблица пользователей</Title>
            <MetricTabs />
            <Table />
            <div className='bottom-btns'>
                <Pagination />
                <DeleteSelectedRowsBtn dispatch={dispatch}/>
            </div>
        </div>
    )
}

export default App;
