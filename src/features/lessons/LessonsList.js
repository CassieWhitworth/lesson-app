import { LESSONS } from "../../app/assets/LESSONS";
import { Container, Col, Row } from 'reactstrap';
import LessonsCard from "./LessonsCard";

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