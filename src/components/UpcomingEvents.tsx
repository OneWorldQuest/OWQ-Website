/**
 * Renders a upcomingSection component
 * 
 * @description 
 * Just on the landing page as the user opens the website 
 */

import Programs_Section_Card from './Progams_Section_card';
import '../styles/UpcomingEvents.css'

function UpcomingEvents() {
  return (
    
    <section className="upcoming-events">
      <div className="events-container">
        <div className="events-text-box">
          <h1>Upcoming One World Quest Events</h1>
          <p>
            Phasellus tincidunt mattis fringilla. Phasellus mollis 
            nisi a tortor commodo laoreet. Maecenas at feugiat risus.
             Suspendisse eget enim nulla. Etiam vehicula condimentum 
             lacus id posuere. Morbi dignissim at ligula eget interdum. 
             Nam non vulputate leo, quis gravida nibh. Donec gravida erat
            ac rutrum tincidunt.Phasellus tincidunt mattis fringilla. Phasellus mollis 
            nisi a tortor commodo laoreet. Maecenas at feugiat risus.
          </p>
        </div>
        
        


        <button className="events-green-box">
        Sign Up Now!
        </button>

        <div className="programs-box">
            <p>
                More about our programs!
            </p>
        </div>

         <div className="our-programs">
            <p>
                Our Programs 
            </p>
        </div>

        <div className="divider1"></div>
        <div className="divider2"></div>

        <div className='info-cards'>
          <Programs_Section_Card
            image = "../assets/teacher-kids-selfie.png"
            info = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur viverra sollicitudin."
            link = "programs"
          />
          <Programs_Section_Card
            image = "https://via.placeholder.com/300x180"
            info = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur viverra sollicitudin."
            link = "programs"
          />
          <Programs_Section_Card
            image = "https://via.placeholder.com/300x180"
            info = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur viverra sollicitudin."
            link = "programs"
          />
          
        </div>
      

        

      </div>
    </section>
    
  );

}

export default UpcomingEvents;