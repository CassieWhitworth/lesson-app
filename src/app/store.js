import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { commentsReducer } from '../features/comments/commentsSlice';
import logger from 'redux-logger';
import { prospectiveStudentsReducer } from '../features/students/ProspectiveStudentsSlice';
import { currentStudentsReducer } from '../features/students/currentStudentSlice';
export const store = configureStore({
  reducer: {
    comments: commentsReducer,
    prospectiveStudents: prospectiveStudentsReducer,
    currentStudents: currentStudentsReducer  
  },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat([logger])
});
