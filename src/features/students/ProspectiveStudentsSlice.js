//import { PROSPECTIVESTUDENTS } from "../../app/assets/PROSPECTIVESTUDENTS";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../app/shared/baseUrl";

export const fetchProspectiveStudents = createAsyncThunk(
    'prospectiveStudents/fetchProspectiveStudents',
    async () => {
        const response = await fetch(baseUrl + 'prospectiveStudents');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

export const postProspectiveStudent = createAsyncThunk(
    'prospectiveStudents/postProspectiveStudent',
    async (prospectiveStudent, {dispatch}) => {
        const response = await fetch(baseUrl + 'prospectiveStudents', {
            method: 'POST',
            body: JSON.stringify(prospectiveStudent),
            headers: {'Content-Type': 'application/json'}
        });
        if (!response.ok) {
            return Promise.reject(response.status);
        }
        const data = await response.json();
        dispatch(addProspectiveStudent(data));
    }
);

const initialState = {
    prospectiveStudentsArray: [],
    isLoading: true,
    errMsg: ''
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
    },
    extraReducers: {
        [fetchProspectiveStudents.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchProspectiveStudents.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.prospectiveStudentsArray = action.payload
        },
        [fetchProspectiveStudents.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const prospectiveStudentsReducer = prospectiveStudentsSlice.reducer;

export const { addProspectiveStudent } = prospectiveStudentsSlice.actions;

export const selectAllProspectiveStudents = () => (state) => {
    return (state.prospectiveStudents.prospectiveStudentsArray
    );
};