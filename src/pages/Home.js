import SheetMusic from '../app/assets/img/sheetmusic.jpg';
import TrumpetPhoto from '../app/assets/img/trumpetphoto.jpg';
import FrenchHornPhoto from '../app/assets/img/frenchhornphoto.jpg';
import CommentsList from '../features/comments/CommentsList';
import CommentForm from '../features/comments/CommentsForm';
import { Container, Row, Col } from 'reactstrap';

const HomePage = () => {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col d-flex justify-content-center">
                        <img class="d-none d-lg-block" src={SheetMusic} height="350" width="350" alt='sheetmusic'/>
                        <img src={TrumpetPhoto} height="350" width="350" alt='trumpet'/>
                        <img class="d-none d-md-block" src={SheetMusic} height="350" width="350" alt='sheetmusic'/>
                        <img src={FrenchHornPhoto} height="350" width="350" alt='frenchhorn'/>
                        <img class="d-none d-lg-block" src={SheetMusic} height="350" width="350" alt='sheetmusic'/>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row mt-5">
                    <div class="col d-flex justify-content-center">
                        <h2><b>CASSIE WHITWORTH</b></h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col d-flex justify-content-center">
                        <h2><b>MUSIC STUDIO</b></h2>
                    </div>
                </div>
                <div class="row mt-3 mb-5">
                    <div class="col d-flex justify-content-center">
                        <h1 class="text-center">Offering in person or virtual private lessons on Trumpet, Horn, and Beginning Piano to students both young and young at heart in the Charlotte, NC area </h1>
                    </div>
                </div>
                <div class="row mt-3 mb-5">
                    <div class="col d-flex justify-content-center">
                        <h1 class="text-center">Tailored, one-on-one instruction designed to meet YOU where you are and help you GROW from there</h1>
                    </div>
                </div>
                <div class="row mt-3 mb-5">
                    <div class="col d-flex justify-content-center">
                        <h1 class="text-center">All skill levels welcome - complete beginner to advanced player</h1>
                    </div>
                </div>
            </div>
            <Container>
                <Row>
                    <Col>
                        <h1>Check out what clients have to say about lessons with Cassie:</h1>
                    </Col>
                </Row>
                <CommentsList />
                <CommentForm />
            </Container>
        </>
        
    )
};

export default HomePage;