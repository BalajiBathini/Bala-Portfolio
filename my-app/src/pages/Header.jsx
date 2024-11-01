const Header = () => {
    return (
        <header className="hero-header">
            <div className="container ">
            <nav className="navbar navbar-expand-lg bg-body-tertiary ">

                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Balaji Bathini</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about-id">About</a>
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
