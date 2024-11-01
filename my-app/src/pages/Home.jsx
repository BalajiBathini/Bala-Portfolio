// Home.jsx

import Typewriter from "../components/Typewriter";
import 'font-awesome/css/font-awesome.min.css';
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
            <section className="about py-5" id="about-id">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6">
                            <img src="./src/assets/images/pic.jpg" alt="Profile Picture" className="about-pic" />
                        </div>
                        <div className="col-lg-6">
                            <h4>{`Hey, I'm `}<span style={{ color: "#EA3A60" }}>Balaji</span><br />

                                Pleased to meet you.</h4>
                            <p>A highly motivated and dedicated full stack developer with a strong foundation in programming
                                languages and frameworks such as HTML, CSS, JavaScript, Angular, React, SpringBoot, Node.js, Java, and Python.
                                Excited to begin a career in full stack development and contribute to innovative and dynamic
                                web applications. Possessing excellent problem-solving skills, the ability to work
                                collaboratively, and a passion for staying up-to-date with the latest industry trends and
                                technologies.</p>
                            <a href="./src/assets/file/Balaji_Bathini_Resume.pdf" className="btn btn-outline-primary theme-button ">Download CV</a>
                        </div>


                    </div>
                </div>
            </section>
            <section className="work-section" id="work">
                <div className="container">
                    <h3 className="work-title">Dive into the work.</h3>
                    <div className="row work-row">
                        {/* College Management Directory */}
                        <div className="col-md-6 col-lg-4 project-card">
                            <div className="project-content">
                                <h4 className="project-title">College Management Directory</h4>
                                <p className="project-description">
                                    A management system using Spring Boot, React, and PostgreSQL to streamline administrative tasks in colleges.
                                </p>
                                <div className="tech-stack">
                                    <span>Spring Boot</span> <span>React</span> <span>PostgreSQL</span>
                                </div>
                            </div>
                        </div>

                        {/* Task Management */}
                        <div className="col-md-6 col-lg-4 project-card">
                            <div className="project-content">
                                <h4 className="project-title">Task Management System</h4>
                                <p className="project-description">
                                    A platform for managing tasks efficiently, built with Spring Boot, React, and PostgreSQL.
                                </p>
                                <div className="tech-stack">
                                    <span>Spring Boot</span> <span>React</span> <span>PostgreSQL</span>
                                </div>
                            </div>
                        </div>

                        {/* Zoomer Food Delivery App */}
                        <div className="col-md-6 col-lg-4 project-card">
                            <div className="project-content">
                                <h4 className="project-title">Zoomer Food Delivery App</h4>
                                <p className="project-description">
                                    A food delivery platform utilizing Express.js, Node.js, React, and MySQL.
                                </p>
                                <div className="tech-stack">
                                    <span>Express.js</span> <span>Node.js</span> <span>React</span> <span>MySQL</span>
                                </div>
                            </div>
                        </div>

                        {/* Rule Engine with AST */}
                        <div className="col-md-6 col-lg-4 project-card">
                            <div className="project-content">
                                <h4 className="project-title">Rule Engine with AST</h4>
                                <p className="project-description">
                                    A dynamic rule engine that leverages Abstract Syntax Trees (AST) for complex rule evaluation.
                                </p>
                                <div className="tech-stack">
                                    <span>AST</span> <span>Rule Engine</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="fun-facts-section" id="stats">
                <div className="fun-facts-container py-5">
                    <div className="container py-lg-3">
                        <h3 className="section-title">Fun Facts</h3>
                        <div className="row text-center fun-facts-row">
                            {/* Projects Done */}
                            <div className="col-lg-3 col-6 mt-4 fact-item">
                                <div className="fact-content">
                                    <span className="icon fa fa-tasks" aria-hidden="true"></span>
                                    <h3 className="fact-number">10+</h3>
                                    <p className="fact-description">Projects Done</p>
                                </div>
                            </div>

                            {/* Problem Solving */}
                            <div className="col-lg-3 col-6 mt-4 fact-item">
                                <div className="fact-content">
                                    <span className="icon fa fa-code" aria-hidden="true"></span>
                                    <h3 className="fact-number">200+</h3>
                                    <p className="fact-description">Problem Solving</p>
                                </div>
                            </div>

                            {/* Certifications */}
                            <div className="col-lg-3 col-6 mt-4 fact-item">
                                <div className="fact-content">
                                    <span className="icon fa fa-certificate" aria-hidden="true"></span>
                                    <h3 className="fact-number">7</h3>
                                    <p className="fact-description">Certifications</p>
                                </div>
                            </div>

                            {/* Awards */}
                            <div className="col-lg-3 col-6 mt-4 fact-item">
                                <div className="fact-content">
                                    <span className="icon fa fa-trophy" aria-hidden="true"></span>
                                    <h3 className="fact-number">0</h3>
                                    <p className="fact-description">Awards Won</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-section py-5" id="contact">
                <div className="container py-lg-3">
                    <h3 className="global-title">Drop me a Message</h3>
                    <div className="row">
                        <div className="col-md-7 contact-form">
                            <form id="form-submit">
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="Name"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        pattern="[0-9]{10}"
                                        title="Please Enter a valid mobile number"
                                        className="form-control"
                                        name="contact"
                                        placeholder="Contact"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="E-mail"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="subject"
                                        placeholder="Subject"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        placeholder="Your Message"
                                        style={{ height: "150px" }}
                                        required
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-primary theme-button" type="submit">
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4 mt-md-0 mt-5 contact-address">
                            <b>Address:</b>
                            <p>23, 3rd Cross</p>
                            <p>D Ramaiah Reddy Street, KR Puram,</p>
                            <p>Bengaluru, Karnataka</p>
                            <p>India - 560026.</p>
                            <br />
                            <b>Phone:</b>
                            <p>
                                <a href="tel:+91-7799008125">+91 779-900-8125</a>
                            </p>
                            <br />
                            <b>Email:</b>
                            <p>
                                <a href="mailto:balajijr007@gmail.com">balajijr007@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>




        </>


    );
}

export default Home;
