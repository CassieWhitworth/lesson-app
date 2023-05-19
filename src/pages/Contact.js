import ContactForm from "../components/ContactForm";
import { Container, Row, Col } from "reactstrap";

const ContactPage = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Request More Information</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Fill out this form to receive a free consultation with Cassie to see if Private Lessons are for you!</h2>
                </Col>
            </Row>
            <Row className='row-content'>
                <ContactForm />
            </Row>
        </Container>
    )
};

export default ContactPage;
