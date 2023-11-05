import { createSlice } from "@reduxjs/toolkit";

const initializeData = {
    groups: []
}

export const groupSlice = createSlice({
    name: 'groups',
    initialState: initializeData,
    reducers: {
        initializeAllGroupsData: (state, action) => {
            state.groups = action.payload
        },
        addGroup: (state, action) => {
            state.groups.push(action.payload);
        },
        pushGroupData: (state, action) => {
            state.groups[action.groupName].push(action.payload);
        }
    }
})

export const getGroupNames = (state) => {
    return state.groups.map((group) => {
        return group.name;
    })
}

export const { initializeAllGroupsData, addGroup, pushGroupData } = groupSlice.actions;

export default groupSlice.reducer;