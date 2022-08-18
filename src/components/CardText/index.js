import { Card } from "./style"

const CardText = ({title, paragraph, gridArea, lineColor}) => {
    return (
        <Card gridArea={gridArea} lineColor={lineColor}>
            <h2>{title}</h2>
            <p>{paragraph}</p>
            <button >Learn more </button>
        </Card>
    )
}

export default CardText