import Testimonial from "../../components/Testimonial"
import { Title, Container } from "./style"

import profile1 from "../../images/image-emily.jpg"
import profile2 from "../../images/image-thomas.jpg"
import profile3 from "../../images/image-jennie.jpg"

const ClientTestimonials = () => {
    return (
        <Container>
            <Title>Client testimonials</Title>
            <Testimonial
            name="Emily R."
            job="Marketing Director"
            test="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
            imgProfile={profile1}
            gridArea="item1"
            />
            <Testimonial
            name="Thomas S."
            job="Chief Operating Officer"
            test="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
            imgProfile={profile2}
            gridArea="item2"
            />
            <Testimonial
            name="Jennie F."
            job="Business Owner"
            test="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
            imgProfile={profile3}
            gridArea="item3"
            />
        </Container>
    )
}

export default ClientTestimonials