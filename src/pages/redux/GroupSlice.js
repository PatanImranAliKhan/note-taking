import { createSlice } from "@reduxjs/toolkit";

const initializeData = {
    groups: []
}

export const groupSlice = createSlice({
    name: 'groups',
    initialState: initializeData,
    reducers: {
        initiazeData: (state, action) => {
            state.groups = action.payload
        },
        addGroup: (state, action) => {
            state.groups.push(action.payload);
        },
        pushGroupData: (state, action) => {
            state.groups[action.ind].push(action.payload);
        }
    }
})

export const { initiazeData, addGroup, pushGroupData } = groupSlice.actions;

export default groupSlice.reducer;