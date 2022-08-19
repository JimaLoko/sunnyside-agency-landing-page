import CardText from "../../components/CardText"
import CardImgtext from "../../components/CardImgText"
import CardImg from "../../components/CardImg"
import bgImg1 from "../../images/desktop/image-graphic-design.jpg"
import bgImg1Mobile from "../../images/mobile/image-graphic-design.jpg"
import bgImg2 from "../../images/desktop/image-transform.jpg"
import bgImg2Mobile from "../../images/mobile/image-transform.jpg"
import bgImg3 from "../../images/desktop/image-stand-out.jpg"
import bgImg3Mobile from "../../images/mobile/image-stand-out.jpg"
import bgImg4 from "../../images/desktop/image-photography.jpg"
import bgImg4Mobile from "../../images/mobile/image-photography.jpg"
import { MainDiv } from "./style"

const Main = () => {
    return (
        <MainDiv>
            <CardText
             title={"Transform your brand"} 
             paragraph={" We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you. "}
             gridArea="item1"
             lineColor="hsl(51, 100%, 49%)"
             />

             <CardImg bgImg={bgImg2} bgImgMobile={bgImg2Mobile} gridArea="item2" />
             <CardImg bgImg={bgImg3} bgImgMobile={bgImg3Mobile} gridArea="item3" />

             <CardText
             title={"Stand out to the right audience"} 
             paragraph={" Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. "}
             gridArea="item4"
             lineColor="hsl(7, 99%, 70%)"
             />

             <CardImgtext
             title={"Graphic Design"}
             paragraph={"Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."}
             gridArea="item5"
             textColor="hsl(167, 40%, 24%)"
             bgImg={bgImg1}
             bgImgMobile={bgImg1Mobile}
             />

             <CardImgtext
             title={"Photography"}
             paragraph={"Increase your credibility by getting the most stunning, high-quality photos that improve your business image."}
             gridArea="item6"
             textColor="hsl(198, 62%, 26%)"
             bgImg={bgImg4}
             bgImgMobile={bgImg4Mobile}
             />
        </MainDiv>
    )
}

export default Main