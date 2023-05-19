import { Container, Col, Row } from 'reactstrap';
import currentStudent from './currentStudent';
import CurrentStudentCard from './currentStudentCard';
import { CURRENTSTUDENTS } from '../../app/assets/CURRENTSTUDENTS';
//import { selectAllProspectiveStudents } from './ProspectiveStudentsSlice';
//import { useSelector } from 'react-redux';

const CurrentStudentsList = () => {
    return(
        <Container>
            <Row>
                {CURRENTSTUDENTS.map((currentStudent) => {
                    return (
                        <Col md='6' lg='4' key={currentStudent.id}>
                           <CurrentStudentCard currentStudent={currentStudent}/>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default CurrentStudentsList;