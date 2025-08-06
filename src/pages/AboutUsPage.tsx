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
import WhoWeAre from '../components/WhoWeAre'
import HeadingText from '../components/HeadingText'
import Statistics from '../components/Statistics'
import JoinUs from '../components/JoinUs'

function AboutUs() {
    return (
        <>
            <div className='AboutUsBody' style={{}}>

                <ImageTextBox
                    image={TeachersTeachingToStuents}
                    heading='What we are all about...'
                    text ="  Phasellus tincidunt mattis fringilla. Phasellus mollis nisi a tortor commodo laoreet. 
                    Maecenas at feugiat risus. Suspendisse eget enim nulla. Etiam vehicula condimentum lacus id posuere. 
                    Morbi dignissim at ligula eget interdum. Nam non vulputate leo, quis gravida nibh. 
                    Donec gravida erat ac rutrum tincidunt."
                />
            <WhoWeAre/>
            <HeadingText
            heading="Our Mission"
            text="Lorem ipsum dolor sitamet, consectetur adipiscing elit. Fusce lo in maila ullamco."
            />
            <Statistics/>
            <HeadingText
            heading="Our Impact"
            text="Lorem ipsum dolor sitamet, consectetur adipiscing elit. Fusce lo in maila ullamco."
            />
            <JoinUs/>
            </div>
        </>
    )
}

export default AboutUs