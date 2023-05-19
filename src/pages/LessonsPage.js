import LessonsList from "../features/lessons/LessonsList";
import {Container} from 'reactstrap';

export const LessonsPage = () => {
    return (
        <Container className='mt-5 mb-5'>
        <LessonsList />
        </Container>
    )
};