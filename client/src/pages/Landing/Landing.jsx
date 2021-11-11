import React from 'react'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'

import './Landing.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer';
import LandingImg1 from '../../assets/landing-illustrator-1.svg'
import LandingImg2 from '../../assets/landing-illustrator-2.svg'
import LandingImg3 from '../../assets/landing-illustrator-3.svg'
import Auth from '../Auth/Auth'
import HowToUse from '../HowToUse/HowToUse'

const Landing = () => {
    return (
        <Router>
            <Navbar />
            <Route exact path='/' render={(props) => (
                <>
                    <header className="landing-header">
                        <div>
                            <h1>Connect</h1>
                            <h1>Organize</h1>
                            <h1>Share content well!</h1>
                            <p>Got tired of searching the recorded meetings?</p>
                            <Link to="/Auth/signup" className="create-group-btn">Create discussion</Link>
                        </div>
                        <img src={LandingImg1} alt="Organizing Contents" />
                    </header>
                    <section className="landing-section-1">
                        <img src={LandingImg2} alt="Organizing Contents" />
                        <div>
                            <h1>Organize your recorded meetings</h1>
                            <p>Have you ever tried to find and rewatch your recorded meetings? Sona Share can help you. It saves your time and interest.</p>
                        </div>
                    </section>
                    <article className="landing-article">
                        <div>
                            <h1>Share your lecture contents</h1>
                            <p>The instructor can post the lecture topics, contents like ppt, pdf, word, images, links and you can find your day to day lecture contents using a specific topic.</p>
                        </div>
                        <img src={LandingImg3} alt="Organizing Contents" />
                    </article>
                    <Footer />
                </>
            )}/>
            <Route exact path='/Auth/:id' component={Auth}/>
            <Route exact path='/how-to-use' component={HowToUse}/>
        </Router>
    )
}

export default Landing
