import ProspectiveStudentsList from "../features/students/ProspectiveStudentsList"
import { Container } from "reactstrap";

const TeacherPortalNewStudents = () => {
    return (
        <Container className='mt-5 mb-5'>
            <ProspectiveStudentsList />
        </Container>
    )
}

export default TeacherPortalNewStudents;