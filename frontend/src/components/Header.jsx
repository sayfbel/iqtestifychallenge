import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './css/Header.css';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Disable scrolling when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);

    return (
        <nav>
            <div className="logo">
                <i className="fa-solid fa-brain"></i>
                <span>IQ TEST APP</span>
            </div>

            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                <i className={menuOpen ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
            </div>

            <ul className={menuOpen ? "nav-links open" : "nav-links"}>
                <li onClick={() => setMenuOpen(false)}><NavLink to="/">Accueil</NavLink></li>
                <li onClick={() => setMenuOpen(false)}><NavLink to="/math">Math</NavLink></li>
                <li onClick={() => setMenuOpen(false)}><NavLink to="/python">Python</NavLink></li>
            </ul>
        </nav>
    );
}
