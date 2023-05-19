import Comment from './Comment';
import { selectAllComments } from './commentsSlice';
import { Container, Col, Row } from 'reactstrap';
import { useSelector } from 'react-redux';


const CommentsList = () => {
    const comments = useSelector(selectAllComments());
    return (
        <Col className='mt-4'>
            {comments.map((comment) => {
                return (
                    <div className='d-flex mb-5' key={comment.id}>
                        <Comment comment={comment} />
                    </div>
                )
            })}
        </Col>
    )
}

export default CommentsList;