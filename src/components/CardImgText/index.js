import { Card } from "./style"

const CardImgtext = ({title, paragraph, gridArea, bgImg, textColor}) => {
    return (
        <Card gridArea={gridArea} bgImg={bgImg} textColor={textColor} >
            <h2>{title}</h2>
            <p>{paragraph}</p>
        </Card>
    )
}

export default CardImgtext