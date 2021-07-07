import React, { useState } from 'react';
import './NavBar.css';
import BtnToggle from './BtnToggle';
const NavBar = () => {

	const [openNav, setOpenNav] = useState(false);
	const handleClick = () => {
		setOpenNav(!openNav);
	};
	return (
		<nav className="navbar">
			<div className="navbar-logo fade-in">
                NICOLAS GOLOB 
            </div> 
			<div onClick={handleClick} className="nav-icon">
                <i className={openNav ? "fas fa-times" : "fas fa-bars"}/>
			</div>
			<ul className={openNav? 'nav-links active' : 'nav-links'}>
				<li className="nav-item ">
					<BtnToggle/>
				</li>
			</ul>
		</nav>
	);
};
export default NavBar;