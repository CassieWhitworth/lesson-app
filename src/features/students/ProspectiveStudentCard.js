import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import BookingForm from '../lessons/BookingForm';

const ProspectiveStudentCard = (props) => {
    return (
        <Card className='mb-4' >
            <CardBody>
                <CardTitle>New Prospective Student</CardTitle>
                <CardText>
                    Submittor's First Name: {props.prospectiveStudent.firstName} <br/>                
                    Submittor's Last Name: {props.prospectiveStudent.lastName} <br/>
                    Phone Number: {props.prospectiveStudent.phoneNum}<br/>
                    Email: {props.prospectiveStudent.email}<br/>
                    Contact Time: {props.prospectiveStudent.contactTime}<br/>
                    Student? {props.prospectiveStudent.student}<br/>
                    Student First Name: {props.prospectiveStudent.studentFirstName}<br/>
                    Student Last Name: {props.prospectiveStudent.studentLastName}<br/>
                    Instrument: {props.prospectiveStudent.instrument}<br/>
                    Years of Experience: {props.prospectiveStudent.yearsExperience}<br/>
                </CardText>
                <BookingForm props={props}/>
            </CardBody>
        </Card>
    )
}

export default ProspectiveStudentCard;