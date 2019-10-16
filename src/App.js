import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import RightDrawer from './components/RightDrawer';
import './styles/App.css';
import useStyles from './styles/AppStyles.js'


const App = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    return (
        <Router>
            <div className={classes.root}>
                <CssBaseline />
                <RightDrawer classes={classes} open={open} setOpen={setOpen}>
                    <main
                        className={clsx(classes.content, {
                            [classes.contentShift]: open,
                        })}
                    >
                        <div className={classes.contentContainer}>
                            <div className={classes.drawerHeader} />
                            <Switch>
                                <Route exact path='/' component={Landing} />
                                <Route exact path='/portfolio' component={() => <Portfolio open={open} />} />
                                <Route exact path='/resume' component={Resume} />
                            </Switch>
                        </div>
                    </main>
                </RightDrawer>
            </div>
        </Router>
    );
}


export default App;