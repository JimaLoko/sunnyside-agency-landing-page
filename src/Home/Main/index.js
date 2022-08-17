import CardText from "../../components/CardText"
import CardImgtext from "../../components/CardImgText"
import CardImg from "../../components/CardImg"
import bgImg1 from "../../images/desktop/image-graphic-design.jpg"
import bgImg2 from "../../images/desktop/image-transform.jpg"
import bgImg3 from "../../images/desktop/image-stand-out.jpg"
import bgImg4 from "../../images/desktop/image-photography.jpg"
import { MainDiv } from "./style"

const Main = () => {
    return (
        <MainDiv>
            <CardText
             title={"Transform your brand"} 
             paragraph={" We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you. "}
             gridArea="item1"
             />

             <CardImg bgImg={bgImg2 } gridArea="item2" />
             <CardImg bgImg={bgImg3 } gridArea="item3" />

             <CardText
             title={"Stand out to the right audience"} 
             paragraph={" Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. "}
             gridArea="item4"
             />

             <CardImgtext
             title={"Graphic Design"}
             paragraph={"Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."}
             gridArea="item5"
             textColor="hsl(167, 40%, 24%)"
             bgImg={bgImg1}
             />

             <CardImgtext
             title={"Photography"}
             paragraph={"Increase your credibility by getting the most stunning, high-quality photos that improve your business image."}
             gridArea="item6"
             textColor="hsl(198, 62%, 26%)"
             bgImg={bgImg4}
             />
        </MainDiv>
    )
}

export default Main