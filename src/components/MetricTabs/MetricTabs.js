import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { metricSystNames } from '../../store/constants'
import metricSystStore, { setMetricSystem } from '../../store/metricSystStore'
import { StyledMetricTab, StyledMetricTabs } from './styles'

const MetricTabs = () => {

    const { metricSyst } = useSelector(store => store.metricSystStore)
    const dispatch = useDispatch()

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
            <StyledMetricTab
                active={metricSyst === metricSystNames.metric}
                onClick={() => changeMetricSyst(metricSystNames.metric)}
            >
                Метрическая система
            </StyledMetricTab>
            <StyledMetricTab
                active={metricSyst === metricSystNames.england}
                onClick={() => changeMetricSyst(metricSystNames.england)}
            >
                Английская система
            </StyledMetricTab>
        </StyledMetricTabs>
    )
}

export default MetricTabs
