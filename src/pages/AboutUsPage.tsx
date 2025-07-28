/**
 * Component file for the 'About Us' page.
 * 
 * @description
 * Renders all necessities for the page.
 * 
 * @returns Page HTML + components
 */

import './../styles/AboutUs.css'
import ImageTextBox from '../components/ImageTextBox'
import TeachersTeachingToStuents from './../assets/teachers-teaching-to-students.png'

function AboutUs() {
    return (
        <>
            <div className='AboutUsBody' style={{}}>

                <ImageTextBox
                    image={TeachersTeachingToStuents}
                    text ="  Phasellus tincidunt mattis fringilla. Phasellus mollis nisi a tortor commodo laoreet. 
    Maecenas at feugiat risus. Suspendisse eget enim nulla. Etiam vehicula condimentum lacus id posuere. 
    Morbi dignissim at ligula eget interdum. Nam non vulputate leo, quis gravida nibh. 
    Donec gravida erat ac rutrum tincidunt."
                    />                
            </div>
        </>
    )
}

export default AboutUs