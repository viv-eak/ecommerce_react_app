import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import Navbar from './Navbar';

class App extends React.Component {
    state = {language: 'english'};

    // onLanguageChange = (language) => {
    //     this.setState({language: language});
    // }

    render() {
        // return <div className="ui container">
        //     <div>
        //         Select a language: 
        //         <i className="flag us" onClick={() => (this.onLanguageChange('english'))} />
        //         <i className="flag nl" onClick={() => (this.onLanguageChange('dutch'))} />
        //     </div>
        //     <LanguageContext.Provider>
        //         <UserCreate value={this.state.language} />
        //     </LanguageContext.Provider>
        // </div>

        return (
            <BrowserRouter>
                <div style={{textAlign: 'center'}}>
                    <Navbar></Navbar>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/blog" component={Blog} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;