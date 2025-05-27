import React from "react";
import { Link } from "react-router-dom";
import Logo from "./pictures/logo.svg";
import Calculate from "./pictures/calculation.svg";
import Measure from "./pictures/measering.svg";
import classes from "./Nav.module.css";

function Nav() {
    return (
        <header className={classes.header}>
            <div className={classes.Logo}>
                <img src={Logo} alt="logo" />
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/services" className={classes.link}>Services</Link>
                    </li>
                    <li>
                        <Link to="/products" className={classes.link}>Products</Link>
                    </li>
                    <li>
                        <Link to="/" className={classes.link}>About Us</Link>
                    </li>
                    <li>
                        <Link to="/portfolio" className={classes.link}>Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/FAQ" className={classes.link}>FAQ</Link>
                    </li>
                    <li>
                        <Link to="/contacts" className={classes.link}>Contacts</Link>
                    </li>
                </ul>
            </nav>

            <nav className={classes.nav2}>
                <ul>
                    <li className={classes.li2}>
                        <Link to="/makerequest" className={classes.link2}>
                            <button className={classes.btn}>
                                <img src={Measure} className={classes.pic} alt="measure" />
                                Make Request
                            </button>
                        </Link>
                    </li>
                    <li className={classes.li2}>
                        <Link to="/calculation" className={classes.link2}>
                            <button className={classes.btn2}>
                                <img src={Calculate} className={classes.pic} alt="calculate" />Calculation
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header >
    );
}
export default Nav;
