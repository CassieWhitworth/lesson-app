import { PROSPECTIVESTUDENTS } from "../../app/assets/PROSPECTIVESTUDENTS";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    prospectiveStudentsArray: PROSPECTIVESTUDENTS
};

const prospectiveStudentsSlice = createSlice({
    name: 'prospective students',
    initialState,
    reducers: {
        addProspectiveStudent: (state, action) => {
            const newProspectiveStudent = {
                id: state.prospectiveStudentsArray.length + 1,
                ...action.payload
            };
            state.prospectiveStudentsArray.push(newProspectiveStudent);
        }
    }
});

export const prospectiveStudentsReducer = prospectiveStudentsSlice.reducer;

export const { addProspectiveStudent } = prospectiveStudentsSlice.actions;

export const selectAllProspectiveStudents = () => (state) => {
    return (state.prospectiveStudents.prospectiveStudentsArray
    );
};