import './App.css';
import headshot from './assets/Ross.jpg';
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <body id="page-top">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span class="d-block d-lg-none">Ross Konesky</span>
                <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src={headshot} alt="..." /></span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>

                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">Education</a></li>
                </ul>
            </div>
        </nav>
        <div class="container-fluid p-0">
            <section class="resume-section" id="about">
                <div class="resume-section-content">
                    <h1 class="mb-0">
                        Ross
                        <span class="text-primary">Konesky</span>
                    </h1>
                    <div class="subheading mb-5">
                        New York, NY 10065&nbsp; ||  973-865-9567&nbsp; || &nbsp;&nbsp;
                        <a href="mailto:rosskon1023@gmail.com">rosskon1023@gmail.com</a>
                    </div>
                    <p class="lead mb-5">Placeholder text for my custom built personal statement</p>
                    <div class="social-icons">
                        <a class="social-icon" href="https://www.linkedin.com/in/ross-konesky-98126a89/"><i class="fab fa-linkedin-in"></i></a>
                        <a class="social-icon" href="https://github.com/Rosskon1023"><i class="fab fa-github"></i></a>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
            <section class="resume-section" id="skills">
                <div class="resume-section-content">
                    <h2 class="mb-4">Relevant Skills</h2>
                    <div class="subheading-skills mb-3">Languages</div>
                    <ul class="list-inline dev-icons">
                        <li class="list-inline-item"><i class="fa-brands fa-html5"></i></li>
                        <li class="list-inline-item"><i class="fab fa-css3"></i></li>
                        <li class="list-inline-item"><i class="fab fa-js"></i></li>
                        <li class="list-inline-item"><i class="fab fa-python"></i></li>
                    </ul>
                    <div class="subheading-skills mb-3">Frameworks / Libraries / Other</div>
                    <ul class="list-inline dev-icons">
                        <li class="list-inline-item"><i class="fab fa-react"></i></li>
                        <li class="list-inline-item"><i class="fab fa-node-js"></i></li>
                        <li class="list-inline-item"><i class="fab fa-npm"></i></li>
                        <li class="list-inline-item-text"> Django, Express, MongoDB, Heroku, Netlify</li>
                        
                    </ul>
                </div>
            </section>
            <hr class="m-0" />
            <section class="resume-section" id="experience">
                <div class="resume-section-content">
                    <h2 class="mb-5">Professional Experience</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Citigroup</h3>
                            <h4 class="mb-0">Citi Realty Services - Business Planning Lead Analyst</h4>
                            <div class="subheading-sm mb-0">Vice President | December 2020 - Present</div>
                            <div class="subheading-sm mb-0">Assistant Vice President | July 2018 - December 2020  </div>
                            <div class="subheading-sm mb-2">Analyst | June 2016 - July 2018  </div>
                            <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">June 2016 - Present</span></div>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
            <section class="resume-section" id="education">
                <div class="resume-section-content">
                    <h2 class="mb-5">Education</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">General Assembly</h3>
                            <div class="subheading mb-3">Software Engineering Immersive</div>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">September 2021 - April 2022</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">University of Wisconsin - Madison</h3>
                            <div class="subheading mb-3">Bachelor of Business Administration</div>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">August 2012 - May 2016</span></div>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
            
            <hr class="m-0" />
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="js/scripts.js"></script>
    </body>
    </Fragment>
  );
}

export default App;
