import { Container, Image, User } from "./style"

const Testimonial = ({name, job, test, imgProfile, gridArea}) => {
    return (
        <Container gridArea={gridArea}>
            <Image>
                <img src={imgProfile} alt="testimonial author"/>
            </Image>
            <p>{test}</p>
            <User>
                <h3>{name}</h3>
                <span>{job}</span>
            </User>
        </Container>
    )
}

export default Testimonial