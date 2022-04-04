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
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
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
                    <p class="lead mb-5">I am a software engineer with an entrepreneurial spirit that is highly motivated to to seek opportunities that facilitate personal and professional growth. With a background in finance and strategic planning, I pride myself on my ability to deliver reliable products, while considering long-term goals and objectives. </p>
                    <div class="social-icons">
                        <a class="social-icon" href="https://www.linkedin.com/in/ross-konesky-98126a89/"><i class="fab fa-linkedin-in"></i></a>
                        <a class="social-icon" href="https://github.com/Rosskon1023"><i class="fab fa-github"></i></a>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
            <section class='resume-section p-3 p-lg-5 d-flex justify-content-center' id='portfolio'>
              <div class='w-100'>
                <h2 class='mb-5'>Portfolio</h2>

                <div class='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
                  <div class='resume-content'>
                    <h3 class='mb-0'>Bingr</h3>
                    <div class='subheading mb-3'>
                      A niche platform for movie and television lovers.
                    </div>
                    <p>
                    Startup that allows users to find local runners, start running clubs, and/or schedule running events. Users are incentivized to invite and run with others via real-time chat, invitations, and following/like features.
                    </p>
                    <a href='https://runmatchv3.herokuapp.com/'>
                      <i class='fas fa-link'></i>
                    </a>
                    <a href='https://github.com/teddysmithdev/runmatch'>
                      <i class='fab fa-github ml-3'></i>
                    </a>
                  </div>
                </div>

                <div class='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
                  <div class='resume-content'>
                    <h3 class='mb-0'>Popcorn Time</h3>
                    <div class='subheading mb-3'>
                      A Movie Trailer discovery application.
                    </div>
                    <p>
                      Each morning at 9:00am a Scrapy spider crawls real-estate blog
                      articles and runs them thru TextBlob (a sentiment analysis
                      wrapper for NLTK). After performing sentiment analysis it
                      stores all the data into MongoDB cloud. For the frontend, I
                      used React to communicate to a Flask API which displays all
                      the database data.
                    </p>
                    <a href='https://upbeat-neumann-e3f17d.netlify.com/'>
                      <i class='fas fa-link'></i>
                    </a>
                    <a href='https://github.com/teddysmithdev/Sentiment-analysis-of-realestate-news-data'>
                      <i class='fab fa-github ml-3'></i>
                    </a>
                  </div>
                </div>

                <div class='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
                  <div class='resume-content'>
                    <h3 class='mb-0'>Palletable</h3>
                    <div class='subheading mb-3'>
                      Beauty for the socially conscious.
                    </div>
                    <p>
                      A honeypot that logs all SSH, TELNET, and ICMP connections
                      along with the first 1024 bytes of data from connection. Each
                      connection is stored in a Postgres database with all logic
                      being handled by Django backend. Each honeypot is a seperate
                      script that runs in the background of Django using
                      Celery/Redis combination.
                    </p>
                    <a href='http://www.djangohoney.com'>
                      <i class='fas fa-link'></i>
                    </a>
                    <a href='https://github.com/teddysmithdev/django-honeypot'>
                      <i class='fab fa-github ml-3'></i>
                    </a>
                  </div>
                </div>

                <div class='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
                  <div class='resume-content'>
                    <h3 class='mb-0'>Speculation Nation</h3>
                    <div class='subheading mb-3'>Speculate the future price of cryptocurrencies.</div>
                    <p>
                      React dashboard that provides visulizations for financial
                      statements. Data is pulled from Financial Modeling Prep API
                      and visualized via ChartJS. Provides live search functionality
                      and state management from Context API.
                    </p>
                    <a href='http://www.buffetologist.com'>
                      <i class='fas fa-link'></i>
                    </a>
                    <a href='https://github.com/teddysmithdev/buffetologist'>
                      <i class='fab fa-github ml-3'></i>
                    </a>
                  </div>
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
            <section class="resume-section m-0" id="experience">
                <div class="resume-section-content">
                    <h2 class="mb-5">Professional Experience</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Citigroup</h3>
                            <h4 class="mb-0">Citi Realty Services - Business Planning Lead Analyst</h4>
                            <div class="subheading-sm mb-0">Vice President | December 2020 - Present</div>
                            <div class="subheading-sm mb-0">Assistant Vice President | July 2018 - December 2020  </div>
                            <div class="subheading-sm mb-2">Analyst | June 2016 - July 2018  </div>
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
                            <div class="subheading mb-0">Bachelor of Business Administration</div>
                            <div class="subheading-sm mb-0">Real Estate & Urban Land Economics</div>
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
