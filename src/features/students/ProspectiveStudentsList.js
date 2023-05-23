import { Container, Col, Row } from 'reactstrap';
import ProspectiveStudentCard from './ProspectiveStudentCard';
import { selectAllProspectiveStudents } from './ProspectiveStudentsSlice';
import { useSelector } from 'react-redux';

const ProspectiveStudentsList = () => {
    const prospectiveStudent = useSelector(selectAllProspectiveStudents());
    return(
        <Container>
            <Row>
                {prospectiveStudent.map((prospectiveStudent) => {
                    return (
                        <Col md='6' lg='4' key={prospectiveStudent.id}>
                           <ProspectiveStudentCard prospectiveStudent={prospectiveStudent}/>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default ProspectiveStudentsList;