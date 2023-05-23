import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import About from './pages/About';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import ContactForm from './pages/Contact';
//import LessonsList from './features/lessons/LessonsList';
import { LessonsPage } from './pages/LessonsPage';
import ContactPage from './pages/Contact';
//import { LESSONS } from './app/assets/LESSONS';
import TeacherPortalNewStudents from './pages/TeacherPortalNewStudents';
import ScheduledLessonsPage from './pages/ScheduledLessonsPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentStudents } from './features/students/currentStudentSlice';
import { fetchProspectiveStudents } from './features/students/ProspectiveStudentsSlice';
//import { fetchLessons } from './features/lessons/LessonsSlice';
import { fetchComments } from './features/comments/commentsSlice';

document.body.style.backgroundColor = '#f1e9e4'



function App() {
    const dispatch = useDispatch();
 
    useEffect(() => {
        dispatch(fetchCurrentStudents());
        dispatch(fetchProspectiveStudents());
        dispatch(fetchComments());
    }, [dispatch]);

    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/lessons' element={<LessonsPage />} />
                <Route path='/teacher' element={<TeacherPortalNewStudents />} />
                <Route path='/scheduledlessons' element={<ScheduledLessonsPage />} />
            </Routes>
            <Footer />
        </div>

    );
}

export default App;
