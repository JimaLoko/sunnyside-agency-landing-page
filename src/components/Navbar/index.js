import { useState } from "react"
import { NavBar, Hamburger } from "./style"
import hamburger from "../../images/icon-hamburger.svg"

const Navbar = () => {
    const [mod, setMod] = useState('')
    const modal = document.querySelector(NavBar)
  
    const showModal = (r) => {
        setMod(r)
        modal.classList.toggle(mod)
    }
    
    return (
        <nav>
            <Hamburger onClick={() => showModal('active')}><img src={hamburger} alt="icon hamburger"/></Hamburger>
            <NavBar>
                <li>
                    <button>About</button>
                </li>
                <li>
                    <button>Services</button>
                </li>
                <li>
                    <button>Projects</button>
                </li>
                <li>
                    <button>Contact</button>
                </li>
            </NavBar>
        </nav>
    )
}

export default Navbar