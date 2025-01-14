import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const navLinks = ["Menu", "Location", "About", "Contact"];
    let [count] = useState(0);

    const responsive = () => {
        const ulEl = document.querySelector('ul');
        if (count === 0) {
            ulEl.style.left = "0%"
            count++;
        } else {
            ulEl.style.left = "-150%";
            count--;
        }
    }
    return (
        <>
            <div className="Navbar">
                <img src="/public/images/logo.png" />
                <ul>
                    {navLinks.map((link, index) => {
                        return (
                            <li key={index}>
                                <a href="#">{link}</a>
                            </li>
                        );
                    })}
                    <div className="Navlink-Btn">
                        <button>login</button>
                    </div>
                </ul>
                <button className="login-primary-btn">login</button>
                <div className="menu-icon-container">
                    <i className='bx bx-menu' onClick={() => { responsive() }}></i>
                </div>
            </div>
        </>
    );
};

export default Navbar;
