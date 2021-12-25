import { configureStore } from '@reduxjs/toolkit';
import  tableStore  from './tableStore'
import  metricSystStore  from './metricSystStore'

export default configureStore({
    reducer: {
        tableStore,
        metricSystStore
    },
});


