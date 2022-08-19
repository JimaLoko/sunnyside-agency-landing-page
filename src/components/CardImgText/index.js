import { Card } from "./style"

const CardImgtext = ({title, paragraph, gridArea, bgImg, textColor, bgImgMobile}) => {
    return (
        <Card gridArea={gridArea} bgImg={bgImg} textColor={textColor} bgImgMobile={bgImgMobile} >
            <h2>{title}</h2>
            <p>{paragraph}</p>
        </Card>
    )
}

export default CardImgtext