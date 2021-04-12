import React from 'react';
import { Checkbox } from '../../index';
import classNames from 'classnames';
import dateConvector from '../../../utils/getUserYearFromMIlliSec';
import weightConvertor from '../../../utils/convertPoundsToKilogram'
import heightConvertor from '../../../utils/heightFromPoundsAdnIbsToSantimeters'

const TableRows = props => {
   
    return (
              <>
                  {props.tableData.map((el, idx) =>{
                      const isSelected = props.checkedRows.includes(el.id);
                      return (
                        <tr className={classNames({
                            'user__row': true,
                            'selected-row': isSelected,
                            })} 
                            key={idx} >
                            <td className="width-50">
                                <Checkbox 
                                    id ={idx} 
                                    selectedHandler={() => props.selectRowHandler(el.id)} 
                                    checked={isSelected}
                                />
                            </td>
                            <td>{idx+1}</td>
                            <td className="width-pr-20">{`${el.first_name} ${el.last_name}`}</td>
                            <td className="width-pr-15">{dateConvector(el.date_of_birth)}</td>
                            <td>{heightConvertor(el.height)}</td>
                            <td>{weightConvertor(el.weight)}</td>
                            <td>{(el.salary * props.currentUSD).toFixed()}</td>
                            <td className="right svg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 22 24">
                                <path fillRule="evenodd" d="M15.126 2c.585 0 1.146.261 1.556.723l2.773 3.101c.413.462.645 1.088.645 1.741s-.232 1.28-.645 1.74L9.332 20.625c-.625.806-1.51 1.3-2.525 1.378h-4.59v-1l.002-4.215c.076-1.054.515-2.035 1.183-2.694L13.568 2.725C13.98 2.26 14.541 2 15.126 2zM6.744 20.005c.478-.038.923-.287 1.28-.743l6.761-7.562-3.357-3.755-6.801 7.605c-.362.358-.586.86-.623 1.318v3.135l2.74.002zM12.693 6.53l3.357 3.755 2.14-2.394c.078-.087.121-.204.121-.327 0-.122-.043-.24-.12-.326l-2.776-3.104c-.076-.086-.18-.135-.29-.135-.108 0-.212.049-.289.135L12.693 6.53z" clipRule="evenodd"/>
                                </svg>
                            </td>
                            <td className="svg" onClick={() => props.deleteRowHandler(el.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" fill="none" viewBox="0 0 23 24">
                                <path fillRule="evenodd" d="M8.762 1h5.365c.987 0 1.788.895 1.788 2v1h2.683c.987 0 1.788.895 1.788 2v2c0 1.105-.8 2-1.788 2h-.072l-.823 11c0 1.105-.8 2-1.788 2H6.973c-.988 0-1.788-.895-1.785-1.917L4.362 10h-.071c-.988 0-1.789-.895-1.789-2V6c0-1.105.8-2 1.789-2h2.682V3c0-1.105.8-2 1.789-2zM4.29 6h14.307v2H4.29V6zm1.865 4h10.576l-.814 10.917-.003.083H6.973l-.817-11zm7.97-7v1H8.763V3h5.365z" clipRule="evenodd"/>
                                </svg>
                            </td>
                        </tr>
                      );
                  })}
       </>
    );

};

export { TableRows };