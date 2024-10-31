// Home.jsx

import SkillsChart from "../components/SkillsChart";
import Typewriter from "../components/Typewriter";

const Home = () => {
    return (
        <>
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
                            <img src="./src/assets/images/bala.jpg" alt="Balaji Bathini" className="banner-image" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="about py-5" id="about">
                <div className="container">
                    <h3 className="title">About Me</h3>
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="./src/assets/images/pic.jpg" alt="Profile Picture" className="about-pic" />
                        </div>
                        <div className="col-lg-6">
                            <h4>Why hire me for your project?</h4>
                            <p>A highly motivated and dedicated full stack developer with a strong foundation in programming
                                languages and frameworks such as HTML, CSS, JavaScript, Angular, React, SpringBoot, Node.js, Java, and Python.
                                Excited to begin a career in full stack development and contribute to innovative and dynamic
                                web applications. Possessing excellent problem-solving skills, the ability to work
                                collaboratively, and a passion for staying up-to-date with the latest industry trends and
                                technologies.</p>
                            <a href="./src/assets/file/Balaji_Bathini_Resume.pdf" className="btn btn-outline-primary theme-button ">Download CV</a>
                        </div>
                        <div className="col-lg-12 py-5">
                            <SkillsChart/>
                        </div>
                    </div>
                </div>
            </section>

        </>


    );
}

export default Home;
