import { createAsyncThunk , createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const fetchData = createAsyncThunk(
   'table/fetchData',
    async () => {
    const response = await fetch(`https://api.npoint.io/324f4ca2cdd639760638`);
    const responseData = await response.json();
    const data = responseData.map( el => {
        return {
            id: uuidv4(),
            ...el,
        };
    });  
    return data;   
    },
);

export const fetchConvertEurToUsd = createAsyncThunk(
    'table/fetchConvertEurToUsd',
    async () => {
        const response = await fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=f84f26bafbf6023d1d0f6a254c1b6831&symbols=USD`);
        const responseData = await response.json();
        return responseData;
    }
);

export const tableStore = createSlice({
    name: 'table',
    initialState: {
        currentUSD: null,
        tableData: [],
        checkedRows: [],
        isLoading: false,
    },
    reducers: {
        selectRow: (state, action) => {
            const isTheSameIdx =  state.checkedRows.indexOf(action.payload);
          
            if (isTheSameIdx > -1) {
                state.checkedRows.splice(isTheSameIdx, 1);
            } else { 
                state.checkedRows.push(action.payload);
            }
        },
        selecteAllRows: (state) => {
            const allFieldsId = state.tableData.map( el => el.id );
            
            if (state.checkedRows.length !== state.tableData.length) {
                state.checkedRows = allFieldsId;
            } else {
                state.checkedRows = [];
            }
        },

        deleteRow: (state, action) => {
            const filteredArray = state.tableData.filter( el => el.id !== action.payload);
            const isExistId = state.checkedRows.indexOf(action.payload);
           
            state.tableData = filteredArray;
            
            if (isExistId > -1) {
                state.checkedRows.splice(isExistId, 1);
            } 
        },

        deleteSelectedRows: (state, action) => {
            const filteredArray = state.tableData.filter( el => {
                return  !state.checkedRows.includes(el.id);
            });
            const cleanSelectedId = state.checkedRows.filter(el => filteredArray.includes(el) );
            state.tableData = filteredArray;
            state.checkedRows =  cleanSelectedId;
        }


    },
    extraReducers: builder => {

        builder.addCase(fetchData.pending, 
        (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(fetchData.fulfilled, 
        (state, {payload}) => {
            state.isLoading = false;
            state.tableData = payload;
        });

        builder.addCase(fetchData.rejected, 
        (state, action) => {
           state.isLoading = false;
        });

        builder.addCase(fetchConvertEurToUsd.fulfilled, 
        (state, {payload}) => { 
            state.currentUSD = payload.rates.USD;
        });

        builder.addCase(fetchConvertEurToUsd.rejected, 
        (state, action ) => {
            console.log(state);
        });
    }
});

export const { selectRow, selecteAllRows, deleteRow, deleteSelectedRows} = tableStore.actions;
export default tableStore.reducer;