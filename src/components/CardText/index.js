import { Card } from "./style"

const CardText = ({title, paragraph, gridArea}) => {
    return (
        <Card gridArea={gridArea}>
            <h2>{title}</h2>
            <p>{paragraph}</p>
            <button>Learn more </button>
            <span></span>
        </Card>
    )
}

export default CardText