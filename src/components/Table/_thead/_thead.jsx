import React from 'react';
import { Checkbox } from '../../index';
import { StyledTHead } from './styles';


const TableHead = props => {
    const checked = props.tableData.length === props.checkedRows.length && props.tableData.length !== 0 ;
    return (
        <StyledTHead>
            <th>
                <Checkbox 
                    id={'all'} 
                    selectedHandler={props.selecteAllRowsHandler} 
                    checked={ checked }
                />
            </th>
            <th>№</th>
            <th>ФИО</th>
            <th>Возраст (Лет)</th>
            <th>Рост</th>
            <th>Вес</th>
            <th>Зарплата</th>
        </StyledTHead>
    )
};

export { TableHead };