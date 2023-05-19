import CurrentStudentsList from "../features/students/currentStudentList";
import { Container } from "reactstrap";

const ScheudledLessonsPage = () => {
    return (
        <Container className='mt-5 mb-5'>
            <CurrentStudentsList />
        </Container>
    )
}

export default ScheudledLessonsPage;