import { createSlice } from "@reduxjs/toolkit";
import { metricSystNames } from "../constants";

export const metricSystStore = createSlice({
    name: 'metricSyst',
    initialState: {
        metricSyst: metricSystNames.metric
    },
    reducers: {
        setMetricSystem: (state, action) => {
            state.metricSyst = action.payload
        }
    }
})

export const { setMetricSystem } = metricSystStore.actions
export default metricSystStore.reducer