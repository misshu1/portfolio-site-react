import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Showcase from './components/Showcase/Showcase';
import Tehnologies from './components/Tehnologies/Tehnologies';
import ProjectsShowcase from './components/Projects/ProjectsShowcase';
import { library } from '@fortawesome/fontawesome-svg-core';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

import { faTimes, faHome, faAddressCard, faEnvelope, faFolderOpen, faFileAlt, faWrench, faCode, faBookReader, faPaintBrush, faGlobe, faMedal, faAt, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faReact, faJs, faGithub, faLinkedin, faFacebookSquare, faGithubSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add( faTimes, faHome, faAddressCard, faEnvelope, faFolderOpen, faFileAlt, faWrench, faCode, faHtml5, faCss3Alt, faReact, faJs, faBookReader, faPaintBrush, faGlobe, faGithub, faLinkedin, faFacebookSquare, faGithubSquare, faInstagram, faMedal, faAt, faPhone, faMapMarkerAlt );

class App extends Component {
    state = {
        sideDrawerOpen: false,
        scroll: 0
    };

    componentWillMount() {
        window.addEventListener('scroll', this.handleScroll);
    };
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll = () => {
        this.setState({scroll: window.scrollY});
    };

    sideDrawerClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        });  
    };
    
    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };

    render() {
        let { sideDrawerOpen, scroll} = this.state;
        let backdrop;

        if(sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler}/>
            document.querySelector('body').className = 'slide-open';
        } else {
            document.querySelector('body').className = 'slide-close';
        };

        return (
            <div style={{height: '100%'}}>
            
                {/* Global Components */}
                <Route path="/" render={() => (
                    <React.Fragment>
                        <SideDrawer 
                        show={sideDrawerOpen} 
                        click={this.backdropClickHandler} />  
                        {backdrop}
                        {scroll > 250 ? 
                            <Toolbar 
                            drawerClickHandler={this.sideDrawerClickHandler}
                            bgColor='rgba(0, 0, 0, .5)' 
                            position='fixed' 
                            index='150' 
                            scroll={scroll} 
                            classN='slide-to-bottom' 
                            opacity='0' /> 
                        : null}
                    </React.Fragment>
                )}></Route>

                {/* Home Page */}
                <Route exact path="/" render={() => (
                    <React.Fragment>
                        <Toolbar 
                        drawerClickHandler={this.sideDrawerClickHandler} 
                        bgColor='#000' />
                        <Showcase />
                        <ProjectsShowcase scroll={scroll} />
                        <Tehnologies />
                        <Footer />
                    </React.Fragment>
                )}></Route>

                {/* Portfolio Page */}
                <Route path="/portofoliu" render={() => (
                    <p style={{textAlign: 'center'}}>portfolio page</p>

                )}></Route>

                {/* About Page */}
                <Route path="/despre" render={() => (
                    <React.Fragment>
                        <Toolbar drawerClickHandler={this.sideDrawerClickHandler} />
                        <About />
                        <Footer />
                    </React.Fragment>

                )}></Route>

                {/* Contact Page */}
                <Route path="/contact" render={() => (
                    <React.Fragment>
                        <Toolbar drawerClickHandler={this.sideDrawerClickHandler} 
                        bgColor="rgba(0, 0, 0, .3)" />
                        <Contact />
                    </React.Fragment>
                )}></Route>
            </div>
        );
    }
}

export default App;
