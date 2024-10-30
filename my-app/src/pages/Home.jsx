// Home.jsx

import Typewriter from "../components/Typewriter";

const Home = () => {
    return (
        <section className="main-banner" id="home">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="slider-info banner-view">
                            <div className="banner-info ">
                                <h2 className="banner-text">
                                    <small>Hello, I’m</small><br />
                                    Balaji Bathini
                                </h2>
                                <h3>
                                    <a href="/" className="typewrite">
                                    <Typewriter
                                                toRotate={`[ "I'm a Full Stack Developer", "I am Creative.", "I Love Design.", "I Love to Develop." ]`}
                                                period={2000}
                                            />
                                    </a>
                                </h3>
                                <div className="button-group">
                                    <a href="#gallery" className="btn btn-primary theme-button">My Work</a>
                                    <a href="#contact" className="btn btn-outline-primary theme-button">Hire Me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <img src="./src/assets/bala.jpg" alt="Balaji Bathini" className="banner-image" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
