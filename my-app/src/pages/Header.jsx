import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false); // Start with the navbar collapsed

    const toggleNavbar = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <header className="hero-header">
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Balaji Bathini</a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            onClick={toggleNavbar}
                            aria-controls="navbarNav"
                            aria-expanded={isOpen}
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#gallery">Certificates</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
