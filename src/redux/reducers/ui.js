import {createSlice} from "@reduxjs/toolkit";

const INIT_STATE = {
    isLoading: false
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        ...INIT_STATE
    },
    reducers: {
        requestStarted: (state) => {
            state.isLoading = true;
        },
        requestSuccess: (state) => {
            state.isLoading = false;
        }

    }
});

export const {requestStarted, requestSuccess} = uiSlice.actions;

export default uiSlice.reducer;