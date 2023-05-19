import Headshot from '../app/assets/img/headshot.jpg';

export const About = () => {
    return (
        <>
        <div class="container mt-5">
       
        <div class="row">
            <div class="col d-flex justify-content-center">
                <h2>ABOUT YOUR TEACHER</h2>
            </div>
        </div>
        <div class="row align-items-center">
            <div class="col d-flex justify-content-center">
                <img src={Headshot} height="400" width="400" alt="Headshot" class="rounded mb-5"/>
            </div>
        </div>
        <div class="row">
            <div class="col d-flex justify-content-center">
              <p class="text-justify">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
           </div>
        </div>
        <div class="row align-items-center">
            <div class="col d-flex justify-content-center">
            </div>
        </div>
    </div>

    <div class="container mt-5 mb-5">
        <div class="row">
            <div class="col d-flex justify-content-center">
                <h2 class="text-right">ABOUT THE STUDIO</h2>
                </div>
                </div>
                
                <div class="row">
                    <div class="col d-flex justify-content-center">
                    <p class="text-justify">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col d-flex justify-content-center">
                <div class="mapouter">
                    {/* <div class="gmap_canvas">
                        <iframe width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=4374%20South%20Tryon%20Street&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                        frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><br>
                        <style>.mapouter{position:relative;text-align:right;height:400px;width:400px;}</style>
                        <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
                        <style>.gmap_canvas {overflow:hidden;background:none!important;height:400px;width:400px;}</style>
                   </div> */}
                   </div>
    </div>
    </div>
    </div>
    </>
    )
}

export default About;