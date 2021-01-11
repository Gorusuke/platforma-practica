import React, {createRef} from 'react';
import {NavLink, Link} from 'react-router-dom';
import logo from './logo2.png'
import './app.css'


const Footer = () => {

	const menu = createRef();

	const toggleMenu = () => {
		menu.current.classList.toggle('show')
	}

    return (
        <footer className="main-footer">
            <div className="ed-grid s-grid-5 lg-grid-4">
                <div className="s-grid-1 lg-cols-3 s-cross-center s-main-start footer-links">
                    <nav className="main-menu" ref={menu}>
                        <ul>
														<li><NavLink to="/">Inicio</NavLink></li>
                            <li><NavLink to="/especialidades">Especialidades</NavLink></li>
                            <li><NavLink to="/cursos">Cursos</NavLink></li>
                            <li><NavLink to="/profesores">Profesores</NavLink></li>
                        </ul>
                    </nav>
                    <div 
											className="main-menu-toggle to-l"
											onClick={() => toggleMenu()}
										></div>
                </div>
                <div className="s-cols-4 lg-cols-1 s-cross-center s-main-end">
                    <Link to="/">
                        <img src={logo} className="main-logo" alt="imagen"/>
                    </Link>
                </div>                
            </div>
        </footer>
    );
}
 
export default Footer;
