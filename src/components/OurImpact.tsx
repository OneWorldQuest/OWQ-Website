/**
 * Renders a OurImpact component
 * 
 * @description 
 * Shows our impact in the community 
 */

import '../styles/OurImpact.css'

function IntroSection() {
  return (

   
    <section className="impact-section">
      
      
        <div className="our-impact-text">
            <p>Our Impact: Empowering the Next Generation</p>
        </div>

        <div className='divider' style={{position: 'relative', top:'13.5rem', left:'16rem', width:'60rem'}}></div>

      <img src="src/assets/team-line.svg" className="youth-icon"/>

          <div className='youth-trained-text'>
            <p>Youth trained</p>
          </div>

         <div className='number-trained-text'>
            <p>8500+</p>
          </div>

      <img src="src/assets/time-line.svg" className="clock-icon" />

          <div className='youth-trained-text' style={{position: 'absolute', top: '392px', left:'593px'}}>
            <p>Hours Volunteered</p>
          </div>

          <div className='number-trained-text' style={{position: 'absolute', top: '336px', left:'587px'}}>
            <p>12,000+</p>
          </div>

      <img src="src/assets/mac-line.svg" className="computer-icon" />

          <div className='youth-trained-text' style={{position: 'absolute', top: '392px', left:'1090px'}}>
            <p>Coding Workshops</p>
          </div>

          <div className='number-trained-text' style={{position: 'absolute', top: '336px', left:'1090px'}}>
            <p>350+</p>
          </div>

          <div className='our-impact-image'>
            <p>image</p>
            </div>

            <div className='stats-box'> 
              <h1>Your Impact per Dollar </h1>
               <div className='divider'></div>
              <p>Phasellus tincidunt mattis fringilla. Phasellus mollis 
            nisi a tortor commodo laoreet. Maecenas at feugiat risus.
             Suspendisse eget enim nulla. Etiam vehicula condimentum 
             lacus id posuere. Morbi dignissim at ligula eget interdum. 
             Nam non vulputate leo, quis gravida nibh. Donec gravida erat
            ac rutrum tincidunt.</p>
            
            </div>

            <div className='stats-box' style={{position: 'absolute', top: '685px'}}> 
              <h1>Face the Stats</h1>
              <div className='divider'></div>
              <p>Phasellus tincidunt mattis fringilla. Phasellus mollis 
            nisi a tortor commodo laoreet. Maecenas at feugiat risus.
             Suspendisse eget enim nulla. Etiam vehicula condimentum 
             lacus id posuere. Morbi dignissim at ligula eget interdum. 
             Nam non vulputate leo, quis gravida nibh. Donec gravida erat
            ac rutrum tincidunt.</p>
            </div>

            <div className='stats-box' style={{position: 'absolute', top: '875px'}}> 
              <h1>What's next?</h1>
               <div className='divider'></div>
              <p>Phasellus tincidunt mattis fringilla. Phasellus mollis 
            nisi a tortor commodo laoreet. Maecenas at feugiat risus.
             Suspendisse eget enim nulla. Etiam vehicula condimentum 
             lacus id posuere. Morbi dignissim at ligula eget interdum. 
             Nam non vulputate leo, quis gravida nibh. Donec gravida erat
            ac rutrum tincidunt.</p>
            </div>

            <div className='statistics-circle'>32%</div>
           
            <div className='statistics-circle' style={{position: 'absolute', top: '675px'}}>84%</div>
            
            <div className='statistics-circle' style={{position: 'absolute', top: '860px'}}>72%</div>

    </section>
    
  );

}

export default IntroSection;