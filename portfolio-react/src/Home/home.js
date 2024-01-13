function home() {
    return (
        <div className="box">
            <a href="./images/cv resume.pdf" download="Thunder CV" className="download">Download CV<i className="fa-solid fa-download"></i></a>
            <div className="carousel">

                <canvas id="stars"></canvas>
                <div className="carousel-item">
                    <div className="carousel-box">
                        <img src="/self/525557.jpg" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="carousel-box">
                        <img src="/self/525561.jpg" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="carousel-box">
                        <img src="/self/525559.jpg" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="carousel-box">
                        <img src="/self/525560.jpg" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="carousel-box">
                        <img src="/self/525558.jpg" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="carousel-box">
                        <img src="/self/525557.jpg" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="carousel-box">
                        <img src="/self/525563.jpg" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="carousel-box">
                        <img src="/self/525564.jpg" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="carousel-box">
                        <img src="/self/525565.jpg" />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-box">
                        <img src="/self/525566.jpg" />
                    </div>
                </div>
            </div>
            <div className="info">
            <ul className="navigation">
                <li className="navigation_item">
                    <h1 className="Name">I'm Thunder</h1>
                    <h6 className="Subtitle">Front-End Developer</h6>
                </li>

                <li className="navigation_item">
                    <a href="AboutMe/AboutMe.html" target="_parent" className="navigation_link highlight" data-text="About Me">About Me</a>
                </li>

                <li className="navigation_item">
                    <a href="Portfolio/Portfolio.html" target="_parent" className="navigation_link highlight" data-text="Portfolio">Portfolio</a>
                </li>

                <li className="navigation_item">
                    <a href="Teams/Teams.html" target="_parent" className="navigation_link highlight" data-text="Teams">Teams</a>
                </li>

                <li className="navigation_item">
                    <a href="Contact/Contact.html" target="_parent" className="navigation_link highlight" data-text="Contact">Contact</a>
                </li>
            </ul>
        </div>
        <div className="social">
            <a href="https://instagram.com/kaminari_sora_?igshid=NGExMmI2YTkyZg==" target="_blank">
                <i className="fab fa-instagram instagram-icon"></i>
            </a>
            <a href="https://github.com/KaminariSora" target="_blank">
                <i className="fab fa-github github-icon"></i>
            </a>
        </div>
            

        </div>


    );
}

export default home