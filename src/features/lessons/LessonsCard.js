import { Card, CardImg, CardBody, CardTitle, CardText, Button} from 'reactstrap';
import { Link } from 'react-router-dom';


const LessonsCard = (props) => {
    return (
        <Card className='mb-4' >
            <CardImg 
                width='400'
                height='400'
                src={props.lesson.image}
                alt={props.lesson.type}
            />
            <CardBody> 
                <CardTitle>{props.lesson.type} {props.lesson.duration}</CardTitle>
                <CardText>{props.lesson.description}</CardText>
                <Link to='/contact'>
                    <Button>Request a Consult</Button>
                </Link>
            </CardBody>
        </Card>
    
    )
};

export default LessonsCard;
