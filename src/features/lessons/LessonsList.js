import { Container, Col, Row } from 'reactstrap';
import LessonsCard from "./LessonsCard";
import { useSelector } from 'react-redux';
import { selectAllLessons } from './LessonsSlice';
import { LESSONS } from '../../app/assets/LESSONS';

const LessonsList = () => {
    return(
        <Container>
            <Row>
                {LESSONS.map((lesson) => {
                    return (
                        <Col md='6' lg='4' key={lesson.id}>
                            <LessonsCard lesson={lesson} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default LessonsList;