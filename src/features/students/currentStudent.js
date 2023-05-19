import { Card, CardBody, CardTitle, CardText } from "reactstrap";


const currentStudent = ({ currentStudent }) => {
    if (currentStudent) {
        const {
            studentFirstName,
            studentLastName,
            phoneNum,
            email,
            instrument,
            recurring,
            virtual,
            day, 
            time,
            startDate
        } = currentStudent;
        return (
            <Card className='mb-4' >
                <CardBody>
                    <CardTitle>Current Student</CardTitle>
                    <CardText>
                        Student First Name: {studentFirstName}<br />
                        Student Last Name: {studentLastName}<br />
                        Phone Number: {phoneNum}<br />
                        Email: {email}<br />
                        Instrument: {instrument}<br />
                        Recurring: {recurring} <br />
                        Virtual: {virtual} <br />
                        Day: {day} <br />
                        Time: {time} <br />
                        Start Date: {startDate}
                    </CardText>
                </CardBody>
            </Card>
        )
    };
    return null;
};

export default currentStudent;