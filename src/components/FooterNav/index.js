import { NavDiv, Nav } from "./style"

import insta from "../../images/icon-instagram.svg"
import facebook from "../../images/icon-facebook.svg"
import pinterest from "../../images/icon-pinterest.svg"
import twitter from "../../images/icon-twitter.svg"

const FooterNav = () => {
    return (
        <NavDiv>
            <div>
                <Nav>
                    <li> <button>About</button> </li>
                    <li> <button>Services</button> </li>
                    <li> <button>Projects</button> </li>
                    <li> <button>Contact</button> </li>
                </Nav>
            </div>
            <div>
            <Nav>
                <li> <button> <img src={insta} alt="icon instagram"/> </button> </li>
                <li> <button> <img src={facebook} alt="icon facebook"/> </button> </li>
                <li> <button> <img src={pinterest} alt="icon pinterest"/> </button> </li>
                <li> <button> <img src={twitter} alt="icon twitter"/> </button> </li>
            </Nav>
            </div>
        </NavDiv>
    )
}

export default FooterNav