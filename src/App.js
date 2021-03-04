import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import pages and components
import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Menu from './components/BOOTSTRAPREBUILD/Menu';


const App = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <Router>
            <div>
                <Menu />
                <main className='container'>
                    <div>
                        <div/>
                        <Switch>
                            <Route exact path='/' component={Landing} />
                            <Route exact path='/portfolio' component={() => <Portfolio open={open} />} />
                            <Route exact path='/resume' component={Resume} />
                        </Switch>
                    </div>
                </main>
            </div>
        </Router>
    );
}


export default App;