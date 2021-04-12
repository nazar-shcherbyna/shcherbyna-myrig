import React from 'react';
import { Checkbox } from '../../index';


const TableHead = props => {
    const checked = props.tableData.length === props.checkedRows.length && props.tableData.length !== 0 ;
    return (
        <tr>
            <th>
                <Checkbox id={'all'} 
                          selectedHandler={props.selecteAllRowsHandler} 
                          checked={ checked }/>
            </th>
            <th>№</th>
            <th>ФИО</th>
            <th>Возраст (Лет)</th>
            <th>Рост</th>
            <th>Вес</th>
            <th>Зарплата</th>
        </tr>
  
    )

};
export { TableHead };