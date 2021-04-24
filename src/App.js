import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import pages and components
import Landing from './pages/Landing/Landing';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';

import "./App.scss";

const App = () => {
    return (
        <Router>
            <div id='AppContainer'>
                <Menu />
                <main className='container' id='PageContainer'>
                    <Switch>
                        <Route exact path='/' component={Landing} />
                        <Route path='/portfolio' component={Portfolio} />
                        <Route path='/resume' component={Resume} />
                    </Switch>
                </main>
                <Footer />
            </div>
        </Router>
    );
}


export default App;