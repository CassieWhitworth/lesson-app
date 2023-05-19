import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const CurrentStudentCard = (props) => {
    return (
        <Card className='mb-4' >
            <CardBody>
                <CardTitle>{props.currentStudent.studentFirstName} {props.currentStudent.studentLastName}</CardTitle>
                <CardText>
                    Phone Number: {props.currentStudent.phoneNum}<br />
                    Email: {props.currentStudent.email}<br />
                    Instrument: {props.currentStudent.instrument}<br />
                    Day: {props.currentStudent.day}<br />
                    Time: {props.currentStudent.time}<br />
                    Recurring: {props.currentStudent.recurring} <br />
                    Virtual: {props.currentStudent.virtual} <br />
                    Start Date: {props.currentStudent.startDate}
                </CardText>
            </CardBody>
        </Card>
    )
}

export default CurrentStudentCard;