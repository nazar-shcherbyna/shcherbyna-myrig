import React from 'react';
import { Checkbox } from '../../index';
import classNames from 'classnames';
import dateConvector from '../../../utils/getUserYearFromMIlliSec';
import weightConvertor from '../../../utils/convertPoundsToKilogram'
import heightConvertor from '../../../utils/heightFromPoundsAdnIbsToSantimeters'
import { StyledRows } from './styles';
import { Pencil, TrashCan } from '../../../icons';
import { useSelector } from 'react-redux';
import { metricSystNames } from '../../../store/constants';

const TableRows = props => {

    const { metricSyst } = useSelector(store => store.metricSystStore)
   
    return (
              <>
                  {props.tableData.map((el, idx) =>{
                      const isSelected = props.checkedRows.includes(el.id);
                      return (
                        <StyledRows className={classNames({
                                'user__row': true,
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
                            <td>
                                {metricSyst === metricSystNames.metric 
                                    ? heightConvertor(el.height) 
                                    : el.height
                                }
                            </td>
                            <td>
                                {metricSyst === metricSystNames.metric
                                    ? `${weightConvertor(el.weight)} кг`
                                    : `${el.weight} lbs`
                                }
                            </td>
                            <td>${(el.salary * props.currentUSD).toFixed()}</td>
                            <td className="right svg">
                                <Pencil />
                            </td>
                            <td className="svg" onClick={() => props.deleteRowHandler(el.id)}>
                                <TrashCan />
                            </td>
                        </StyledRows>
                      );
                  })}
       </>
    );

};

export { TableRows };