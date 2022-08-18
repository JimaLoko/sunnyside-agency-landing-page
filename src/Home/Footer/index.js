import FooterNav from "../../components/FooterNav"
import logo from "../../images/logo.svg"
import { FooterDiv } from "./style"

const Footer = () => {
    return (
        <FooterDiv>
            <div>
                <img src={logo} alt="logo" />
            </div>
        <FooterNav/>
        </FooterDiv>
    )
}

export default Footer