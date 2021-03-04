import React from 'react';
import bootstrap from 'bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


const App = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <Router>
            <div className='container'>
                // ? nav menu?
                <main>
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