import { createSlice } from "@reduxjs/toolkit";
import { CURRENTSTUDENTS } from "../../app/assets/CURRENTSTUDENTS";

const initialState = {
    currentStudentsArray: CURRENTSTUDENTS
};

const currentStudentsSlice = createSlice({
    name: 'current students',
    initialState,
    reducers: {
        addCurrentStudent: (state, action) => {
            const newCurrentStudent = {
                id: state.currentStudentsArray.length + 1,
                ...action.payload
            };
            state.currentStudentsArray.push(newCurrentStudent);
        }
    }
});

export const currentStudentsReducer = currentStudentsSlice.reducer;

export const { addCurrentStudent } = currentStudentsSlice.actions;

export const selectAllCurrentStudents = () => (state) => {
    return (state.currentStudents.currentStudentsArray
    );
};