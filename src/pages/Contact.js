import ContactForm from "../components/ContactForm";
import { Container, Row, Col } from "reactstrap";

const ContactPage = () => {
    return (
        <Container className='mt-4'>
            <Row>
                <Col>
                    <h1><b>REQUEST MORE INFORMATION</b></h1>
                </Col>
            </Row>
            <Row className='mb-4'>
                <Col>
                    <h4>Fill out this form to receive a free consultation with Cassie to see if Private Lessons are for you!</h4>
                </Col>
            </Row>
            <Row>
                <ContactForm />
            </Row>
        </Container>
    )
};

export default ContactPage;
