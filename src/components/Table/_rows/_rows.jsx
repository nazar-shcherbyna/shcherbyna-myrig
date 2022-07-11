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
import { getNumbFromStr } from '../../../utils/getNumbFromStr';
import { useState } from 'react';
import { getSmFromIbs } from '../../../utils/getSmFromIbs';

const TableRows = props => {

    const { metricSyst } = useSelector(store => store.metricSystStore)
    const avarageSalary = (props.tableData.reduce((midSalary, employee) => {
            return midSalary + employee.salary * props.currentUSD
        }, 0) / props.tableData.length).toFixed()
        
    const averageAge = (props.tableData.reduce((midSalary, employee) => {
        return midSalary + dateConvector(employee.date_of_birth) * props.currentUSD
    }, 0) / props.tableData.length).toFixed()

    const avarageHeight = () => {
        const avarageHeightWithPoint = (props.tableData.reduce((midWeight, employee) => {
            const arrWeightInNumb = getNumbFromStr(employee.height)
            return midWeight + (arrWeightInNumb[0] + '.' + arrWeightInNumb.slice(1).reduce((accum, num) => accum + num)) * 1
        }, 0) / props.tableData.length).toFixed(2)
        const arrWithAvarageValue = avarageHeightWithPoint.split('.')
        
        if (metricSyst === metricSystNames.metric) {
            const arrWithAvarageValSm = getSmFromIbs(arrWithAvarageValue)

            if (arrWithAvarageValSm < 200) {
                return `1м ${(arrWithAvarageValSm % 100).toFixed()}см`
            }
            return `2м ${(arrWithAvarageValSm % 200).toFixed()}см`
        }
        return `${arrWithAvarageValue[0]}'${arrWithAvarageValue[1]}"`
    }

    const avarageWeight = (props.tableData.reduce((midSalary, employee) => {
        return midSalary + (metricSyst === metricSystNames.metric ? weightConvertor(employee.weight) * 1 : employee.weight)
    }, 0) / props.tableData.length).toFixed()
   
    return <>
                {props.tableData.map((el, idx) =>{
                    const isSelected = props.checkedRows.includes(el.id);
                    return (
                        <StyledRows className={classNames({
                                'user__row': true,
                            })}
                            key={idx}
                        >
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
                    )
                })}
                <StyledRows>
                    <td className="width-50"></td>
                    <td></td>
                    <td className="width-pr-20">Avarage</td>
                    <td className="width-pr-15">{averageAge}</td>
                    <td>{avarageHeight()}</td>
                    <td>
                        {metricSyst === metricSystNames.metric
                            ? `${avarageWeight} кг`
                            : `${avarageWeight} lbs`
                        }
                    </td>
                    <td>${avarageSalary}</td>
                    <td></td>
                    <td></td>
                </StyledRows>
    </>
};

export { TableRows };