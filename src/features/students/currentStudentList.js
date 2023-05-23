import { Container, Col, Row } from 'reactstrap';
import CurrentStudentCard from './currentStudentCard';
import { selectAllCurrentStudents } from './currentStudentSlice';
import { useSelector } from 'react-redux';


const CurrentStudentsList = () => {
    const currentStudent = useSelector(selectAllCurrentStudents())
    return(
        <Container>
            <Row>
                {currentStudent && currentStudent.map((currentStudent) => {
                    return (
                        <Col md='6' lg='4' key={currentStudent.id}>
                           <CurrentStudentCard props={currentStudent}/>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default CurrentStudentsList;