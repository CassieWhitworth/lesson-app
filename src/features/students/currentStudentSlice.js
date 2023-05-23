import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import { CURRENTSTUDENTS } from "../../app/assets/CURRENTSTUDENTS";
import {baseUrl} from '../../app/shared/baseUrl';

export const fetchCurrentStudents = createAsyncThunk (
    'currentStudents/fetchCurrentStudents',
    async () => {
        const response = await fetch(baseUrl + 'currentStudents');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
)

export const postCurrentStudent = createAsyncThunk(
    'currentStudents/postCurrentStudent',
    async (currentStudent, {dispatch}) => {
        const response = await fetch(baseUrl + 'currentStudents', {
            method: 'POST',
            body: JSON.stringify(currentStudent),
            headers: {'Content-Type': 'application/json'}
        });
        if (!response.ok) {
            return Promise.reject(response.status);
        }
        const data = await response.json();
        dispatch(addCurrentStudent(data));
    }
);

const initialState = {
    currentStudentsArray: [],
    isLoading: true,
    errMsg: ''
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
    },
    extraReducers: {
        [fetchCurrentStudents.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchCurrentStudents.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.currentStudentsArray = action.payload
        },
        [fetchCurrentStudents.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const currentStudentsReducer = currentStudentsSlice.reducer;

export const { addCurrentStudent } = currentStudentsSlice.actions;

export const selectAllCurrentStudents = () => (state) => {
    return (state.currentStudents.currentStudentsArray
    );
};