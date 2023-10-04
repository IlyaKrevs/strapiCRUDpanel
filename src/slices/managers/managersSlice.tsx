import { createSlice } from "@reduxjs/toolkit";

import { fetchData } from "../AsyncMethods/fetchData";




let initialState: any = {
    value: null,
    loadStatus: '',
}

export const managersSlice = createSlice({
    name: 'arbitration-managers',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchData.pending]: (state, action) => {
            state.loadStatus = 'Loading'
        },
        [fetchData.fulfilled]: (state, action) => {
            let currentMethod = action.meta.arg.method;

            if (!action.meta.arg.path.includes('arbitration-managers')) {
                return
            }

            if (action?.payload?.error?.status === 400) {
                return
            }

            if (currentMethod === 'GET') {
                state.value = action.payload.data
                state.loadStatus = state.name + ': ' + 'GetComplete'

            } else if (currentMethod === 'POST') {
                state.value = [...state.value, action.payload.data]
                state.loadStatus = state.name + ': ' + 'PostComplete'

            } else if (currentMethod === 'PUT') {
                let indexEditObj = state.value.findIndex((item: any) => item.id === action.payload.data.id)
                state.value.splice(indexEditObj, 1, action.payload.data)
                state.loadStatus = state.name + ': ' + 'PutComplete'

            } else if (currentMethod === 'DELETE') {
                state.value = state.value.filter((item: any) => item.id !== action.payload.data.id)
                state.loadStatus = state.name + ': ' + 'DeleteComplete'
            }
        }
    }
})

export const { } = managersSlice.actions;

export default managersSlice.reducer;