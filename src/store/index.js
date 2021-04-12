import { configureStore } from '@reduxjs/toolkit';
import  tableStore  from './tableStore'

export default configureStore({
    reducer: {
        tableStore
    },
});


