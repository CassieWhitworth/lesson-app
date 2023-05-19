import { Formik, Field, Form } from 'formik';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label } from 'reactstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from './commentsSlice';

const CommentForm = () => {
    const [modalOpen, setModalOpen] = useState();
    const [author, setAuthor] = useState('');
    const [role, setRole] = useState('');
    const [text, setText] = useState('');
    
    const dispatch = useDispatch();

    const resetForm = () => {
        setAuthor('');
        setRole('Student');
        setText('');
    }

    const handleSubmit = (values) => {
        const comment = {
            author: values.author,
            role: values.role,
            text: values.text
        }
        console.log('form values: ', values);
        console.log('in JSON format: ', JSON.stringify(values));
        dispatch(addComment(comment));
        resetForm();
        setModalOpen(false);
    };

    return (
        <>
        <Button outline onClick={() => setModalOpen(true)}>
        <i className='fa fa-pencil fa-lg' /> Add Comment
        </Button>
        <Modal isOpen={modalOpen}>
            <ModalHeader toggle={() => setModalOpen(false)}>
                Add Review
            </ModalHeader>
                <ModalBody>
                    <Formik initialValues={{
                    author: '',
                    role: '',
                    text: ''
                    }}
                    onSubmit={handleSubmit}
                    >
                        <Form>
                            <FormGroup>
                                <Label htmlFor='author'>Author</Label>
                                <Field
                                    name='author'
                                    placeholder='Your Name'
                                    className='form-control'
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='role'>Role</Label>
                                <Field
                                    name='role'
                                    as='select'
                                    className='form-control'
                                >
                                    <option>Select...</option>
                                    <option>Student</option>
                                    <option>Parent/Guardian</option>
                                </Field>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='text'>Comment</Label>
                                <Field
                                    name='text'
                                    as='textarea'
                                    rows='12'
                                    className='form-control'
                                />
                            </FormGroup>
                            <Button type='submit' color='primary'>
                                Submit
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
        </Modal>
        </>
    );
};

export default CommentForm;