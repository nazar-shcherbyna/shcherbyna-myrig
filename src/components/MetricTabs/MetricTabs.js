import classNames from 'classnames'
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { metricSystNames } from '../../store/constants'
import metricSystStore, { setMetricSystem } from '../../store/metricSystStore'
import { StyledMetricTabs } from './styles'

const MetricTabs = () => {

    const { metricSyst } = useSelector(store => store.metricSystStore)
    const dispatch = useDispatch()
    console.log(metricSyst);

    const changeMetricSyst = (system) => {
        switch (system) {
            case metricSystNames.metric:
                if (metricSyst !== metricSystNames.metric) {
                    dispatch(setMetricSystem(metricSystNames.metric))
                }
                break
            case metricSystNames.england:
                if (metricSystStore !== metricSystNames.england) {
                    dispatch(setMetricSystem(metricSystNames.england))
                }
                break
            default :
                break
        }
    }

    return (
        <StyledMetricTabs>
            <div 
                className={classNames({
                    'active': metricSyst === metricSystNames.metric
                })}
                onClick={() => changeMetricSyst(metricSystNames.metric)}
            >
                Метрическая система
            </div>
            <div 
                className={classNames({
                    'active': metricSyst === metricSystNames.england
                })}
                onClick={() => changeMetricSyst(metricSystNames.england)}
            >
                Английская система
            </div>
        </StyledMetricTabs>
    )
}

export default MetricTabs
