import Navbar from "../../components/Navbar";
import logo from "../../images/logo.svg"
import arrow from "../../images/icon-arrow-down.svg"
import { HeaderDiv} from "./style";


const Header = () => {
    return (
        <HeaderDiv>
            <div className="top">
                <div className="logo">
                <img src={logo} alt="logo"/>
                </div>
                <Navbar/>
            </div>
            <h1>We are creatives</h1>
            <div className="arrow">
                <img src={arrow} alt="icon arrow"/>
            </div>
        </HeaderDiv>
    )
}

export default Header