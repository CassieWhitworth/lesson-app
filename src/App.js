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

document.body.style.backgroundColor = '#f1e9e4'

function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/about' element={<About/>} />
                <Route path ='/contact' element ={<ContactPage/>} />
                <Route path ='/lessons' element={<LessonsPage />} />
                <Route path ='/teacher' element={<TeacherPortalNewStudents />} />
                <Route path='/scheduledlessons' element={<ScheduledLessonsPage />} />
            </Routes>
            <Footer />
        </div>
        
    );
}

export default App;
