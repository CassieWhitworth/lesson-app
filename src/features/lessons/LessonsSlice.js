// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { baseUrl } from '../../app/shared/baseUrl';
// import { mapImageURL } from '../../utils/mapImageURL';



// export const fetchLessons = createAsyncThunk(
//     'lessons/fetchLessons',
//     async () => {
//         const response = await fetch(baseUrl + 'lessons');
//         if (!response.ok) {
//             return Promise.reject('Unable to fetch, status: ' + response.status);
//         }
//         const data = await response.json();
//         return data;
//     }
// );

// const initialState = {
//     lessonsArray: [],
//     isLoading: true,
//     errMsg: ''
// };

// const lessonsSlice = createSlice({
//     name: 'lessons',
//     initialState,
//     reducers: {},
//     extraReducers: {
//         [fetchLessons.pending]: (state) => {
//             state.isLoading = true;
//         },
//         [fetchLessons.fulfilled]: (state, action) => {
//             state.isLoading = false;
//             state.errMsg = '';
//             state.lessonsArray = mapImageURL(action.payload);
//         },
//         [fetchLessons.rejected]: (state, action) => {
//             state.isLoading = false;
//             state.errMsg = action.error ? action.error.message : 'Fetch failed';
//         }
//     }
// });

// export const lessonsReducer = lessonsSlice.reducer;

// export const selectAllLessons = () => (state) => {
//     return state.lessons.lessonsArray;
// }