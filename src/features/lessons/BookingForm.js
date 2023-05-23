import { Formik, Field, Form } from 'formik';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Col } from 'reactstrap';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from 'react-redux';
import { postCurrentStudent } from '../students/currentStudentSlice';
import { current } from '@reduxjs/toolkit';


const BookingForm = () => {

    const [modalOpen, setModalOpen] = useState();
    const [startDate, setStartDate] = useState(new Date());

    const dispatch = useDispatch()

    const handleSubmit = (values) => {
        const currentStudent = {
            studentFirstName: values.studentFirstName,
            studentLastName: values.studentLastName,
            phoneNum: values.phoneNum,
            email: values.email,
            day: values.day,
            time: values.time,
            date: values.date,
            recurring: values.recurring,
            virtual: values.virtual,
        };
        console.log(currentStudent);
        dispatch(postCurrentStudent(currentStudent));
        setModalOpen(false);
    };

    return (
        <>
            <Button onClick={() => setModalOpen(true)}>
                <i className='fa fa-calendar fa-lg' /> Book Now
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    Book Lesson
                </ModalHeader>
                <ModalBody>
                    
                    
                    
                    <Formik
                        initialValues={{
                            studentFirstName: '',
                            studentLastName: '',
                            phoneNum:'',
                            email:'',
                            day: '',
                            time:'',
                            date: new Date(),
                            recurring: 'Yes',
                            virtual: 'No'
                        }}
                        onSubmit={handleSubmit}
                    
                    >
                        <Form className='mt-3'>
                            <FormGroup>
                                <Label htmlFor='studentFirstName'>First Name</Label>
                                <Field 
                                    className='formControl'
                                    name='studentFirstName'
                                    placeholder='Student First Name'
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='studentLastName'>Last Name</Label>
                                <Field 
                                    className='formControl'
                                    name='studentLastName'
                                    placeholder='Student Last Name'
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='phoneNum'>Phone Number</Label>
                                <Field 
                                    className='formControl'
                                    name='phoneNum'
                                    placeholder='xxx-xxx-xxxx'
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='email'>Email</Label>
                                <Field 
                                    className='formControl'
                                    name='email'
                                    placeholder='email'
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label check>
                                    Recurring?
                                </Label>
                                <Col md='9'>
                                <Field
                                    className='formControl'
                                    name='recurring'
                                    as='select'

                                >
                                    <option>Yes</option>
                                    <option>No</option>
                                </Field>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label check >
                                    Virtual?
                                </Label>
                                <Col md='9'>
                                <Field
                                    className='formControl'
                                    name='virtual'
                                    as='select'
                                >
                                    <option>Yes</option>
                                    <option>No</option>
                                </Field>
                                </Col>
                                
                            </FormGroup>
                            <FormGroup>
                                <Label check >
                                    Day
                                </Label>
                                <Col md='9'>
                                <Field
                                    className='formControl'
                                    name='day'
                                    as='select'
                                >
                                    <option>Select</option>
                                    <option>Monday</option>
                                    <option>Tuesday</option>
                                    <option>Wednesday</option>
                                    <option>Thursday</option>
                                    <option>Friday</option>
                                </Field>
                                </Col>
                                
                            </FormGroup>
                            <FormGroup>
                                <Label check >
                                    Time
                                </Label>
                                <Col md='9'>
                                <Field
                                    className='formControl'
                                    name='time'
                                    as='select'
                                >
                                    <option>Select</option>
                                    <option>8:00am</option>
                                    <option>8:30am</option>
                                    <option>9:00am</option>
                                    <option>9:30am</option>
                                    <option>10:00am</option>
                                    <option>10:30am</option>
                                    <option>11:00am</option>
                                    <option>11:30am</option>
                                    <option>12:00pm</option>
                                    <option>12:30pm</option>
                                    <option>1:00pm</option>
                                    <option>1:30pm</option>
                                    <option>2:00pm</option>
                                    <option>2:30pm</option>
                                    <option>3:00pm</option>
                                    <option>3:30pm</option>
                                    <option>4:00pm</option>
                                    <option>4:30pm</option>
                                    <option>5:00pm</option>

                                </Field>
                                </Col>
                                
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='startDate'>Start Date</Label>
                                <DatePicker
                                    className='formControl'
                                    name='startDate'
                                    as='select'

                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                  
                                    dateFormat='MMMM d, yyyy'
                                />
                            </FormGroup>
                            <Button type='submit'>
                                Submit
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    )
}

export default BookingForm;