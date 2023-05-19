import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import BookingForm from "../lessons/BookingForm";

const prospectiveStudent = ({prospectiveStudent}) => {
    if (prospectiveStudent) {
        const { 
            firstName, 
            lastName, 
            phoneNum, 
            email,
            contactTime,
            student,
            studentFirstName,
            studentLastName,
            instrument,
            yearsExperience
        } = prospectiveStudent;
        return (
            <Card className='mb-4' >
            <CardBody>
                <CardTitle>New Prospective Student</CardTitle>
                <CardText>
                    Submittor's First Name: {firstName} <br/>                
                    Submittor's Last Name: {lastName} <br/>
                    Phone Number: {phoneNum}<br/>
                    Email: {email}<br/>
                    Contact Time: {contactTime}<br/>
                    Student? {student}<br/>
                    Student First Name: {studentFirstName}<br/>
                    Student Last Name: {studentLastName}<br/>
                    Instrument: {instrument}<br/>
                    Years of Experience: {yearsExperience}<br/>
                </CardText>
                <BookingForm />
            </CardBody>
        </Card>
        )
    };
    return null;
};

export default prospectiveStudent;