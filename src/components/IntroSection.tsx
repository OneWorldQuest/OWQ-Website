/**
 * Renders a introSection component
 * 
 * @description 
 * Just on the landing page as the user opens the website 
 */

import '../styles/IntroSection.css'

function IntroSection() {
  return (

   
    <section className="intro-section">
      <div className="intro-container">
        <div className="intro-text-box">
          <h1>A little bit about the company...</h1>
          <p>
            Phasellus tincidunt mattis fringilla. Phasellus mollis 
            nisi a tortor commodo laoreet. Maecenas at feugiat risus.
             Suspendisse eget enim nulla. Etiam vehicula condimentum 
             lacus id posuere. Morbi dignissim at ligula eget interdum. 
             Nam non vulputate leo, quis gravida nibh. Donec gravida erat
            ac rutrum tincidunt.
          </p>
        </div>
        <img
          src="src/assets/kids-riding-hippo.png"
          alt="Hero Image"
          className="intro-image"
        />
      </div>
    </section>
    
  );

}

export default IntroSection;