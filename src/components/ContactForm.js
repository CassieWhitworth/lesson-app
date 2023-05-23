import { Button, Col, Label, FormGroup } from "reactstrap";
import { Formik, Field, Form } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postProspectiveStudent } from "../features/students/ProspectiveStudentsSlice";
import prospectiveStudent from "../features/students/prospectiveStudent";

const ContactForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [email, setEmail] = useState('');
    const [contactTime, setContactTime] = useState('AM');
    const [student, setStudent] = useState('Yes');
    const [studentFirstName, setStudentFirstName] = useState('');
    const [studentLastName, setStudentLastName] = useState('');
    const [instrument, setInstrument] = useState('');
    const [yearsExperience, setYearsExperience] = useState('');

    const dispatch = useDispatch();
    
    const resetForm = () => {
        setFirstName('');
        setLastName('');
        setPhoneNum('');
        setEmail('');
        setContactTime('AM');
        setStudent('Yes');
        setStudentFirstName('');
        setStudentLastName('');
        setInstrument('');
        setYearsExperience('');
    };

    const handleSubmit = (values, { resetForm }) => {
        const prospectiveStudent = {
            firstName: values.firstName,
            lastName: values.lastName,
            phoneNum: values.phoneNum,
            email: values.email,
            contactTime: values.ContactTime,
            student: values.student,
            studentFirstName: values.studentFirstName,
            studentLastName: values.studentLastName,
            instrument: values.instrument,
            yearsExperience: values.yearsExperience
        };
        console.log(values);
        dispatch(postProspectiveStudent(prospectiveStudent));
        resetForm();

    }
    

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                phoneNum: '',
                email: '',
                contactTime: 'AM',
                student: 'Yes',
                studentFirstName: '',
                studentLastName: '',
                instrument: '',
                yearsExperience: ''
            }}
            onSubmit={handleSubmit}>
            <Form>
                <FormGroup row>
                    <Label htmlFor='firstName' md='2'>
                        First Name
                    </Label>
                    <Col md='10'>
                        <Field
                            className='formControl'
                            name='firstName'
                            placeholder='First Name'
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='lastName' md='2'>
                        Last Name
                    </Label>
                    <Col md='10'>
                        <Field
                            className='formControl'
                            name='lastName'
                            placeholder='Last Name'
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='phoneNum' md='2'>
                        Phone Number
                    </Label>
                    <Col md='10'>
                        <Field
                            className='formControl'
                            name='phoneNum'
                            placeholder='xxx-xxx-xxxx'
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='email' md='2'>
                        Email
                    </Label>
                    <Col md='10'>
                        <Field
                            className='formControl'
                            name='email'
                            placeholder='Email Address'
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label check md={{ size: 4 }}>
                        What is the best time to contact you?
                    </Label>
                    <Col md='4'>
                        <Field
                            className='formControl'
                            name='contactTime'
                            as='select'
                        >
                            <option>AM</option>
                            <option>PM</option>
                        </Field>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label check md={{ size: 4 }}>
                        Are you the student?
                    </Label>
                    <Col md='4'>
                        <Field
                            className='formControl'
                            name='student'
                            as='select'
                        >
                            <option>Yes</option>
                            <option>No</option>
                        </Field>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='studentFirstName' md='2'>
                        Student First Name
                    </Label>
                    <Col md='10'>
                        <Field
                            className='formControl'
                            name='studentFirstName'
                            placeholder='Student First Name'
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='studentLastName' md='2'>
                        Student Last Name
                    </Label>
                    <Col md='10'>
                        <Field
                            className='formControl'
                            name='studentLastName'
                            placeholder='Student Last Name'
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='instrument' md='2'>
                        Instrument
                    </Label>
                    <Col md='10'>
                        <Field
                            className='formControl'
                            name='instrument'
                            as='select'
                        >
                            <option>Select</option>
                            <option>Trumpet</option>
                            <option>Horn</option>
                            <option>Piano</option>
                        </Field>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='yearsExperience' md='2'>
                        Years of Experience
                    </Label>
                    <Col md='10'>
                        <Field
                            className='formControl'
                            name='yearsExperience'
                            as='select'
                        >
                            <option>Select</option>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6+</option>
                        </Field>
                    </Col>
                </FormGroup>
                <Button type='submit'>
                    Submit
                </Button>
            </Form>
        </Formik>
    )
};

export default ContactForm;