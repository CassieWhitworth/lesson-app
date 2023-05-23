import { Card, CardBody, CardTitle, CardText,  } from 'reactstrap';

const CurrentStudentCard = ( {props} ) => {

    return (
        <Card className='mb-4' >
            <CardBody>
                <CardTitle>{props.studentFirstName} {props.studentLastName}</CardTitle>
                <CardText>
                    Phone Number: {props.phoneNum}<br />
                    Email: {props.email}<br />
                    Instrument: {props.instrument}<br />
                    Day: {props.day}<br />
                    Time: {props.time}<br />
                    Recurring: {props.recurring} <br />
                    Virtual: {props.virtual} <br />
                    Start Date: {props.startDate}
                </CardText>
            </CardBody>
        </Card>
    )
}

export default CurrentStudentCard;