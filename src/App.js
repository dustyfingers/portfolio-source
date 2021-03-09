import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import pages and components
import Landing from './pages/BOOTSTRAPREBUILD/Landing';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Menu from './components/BOOTSTRAPREBUILD/Menu';
import Footer from './components/BOOTSTRAPREBUILD/Footer';


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