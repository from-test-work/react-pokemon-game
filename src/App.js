import {useRouteMatch, Route, Switch, Redirect} from 'react-router-dom';
import cn from 'classnames';
import HomePage from "./routes/HomePage";
import GamePage from "./routes/GamePage";
import AboutPage from "./routes/AboutPage";
import ContactPage from "./routes/ContactPage";
import MenuHeader from "./components/MenuHeader";
import FooterBlock from "./components/FooterBlock";

import style from './style.module.css'

const App = () => {
    const match = useRouteMatch('/');

    return (
        <Switch>
            <Route path="/404" render={() => (
                <>
                    <h1>404 Error</h1>
                    <h2>Page not found</h2>
                </>
            )}/>
            <Route>
                <>
                    <MenuHeader bgActive={!match.isExact}/>
                    <div className={cn(style.wrap, {[style.isHomePage]: match.isExact})}>
                        <Switch>
                            <Route path="/" exact component={HomePage}/>
                            <Route path="/home" component={HomePage}/>
                            <Route path="/game" component={GamePage}/>
                            <Route path="/about" component={AboutPage}/>
                            <Route path="/contact" component={ContactPage}/>
                            <Route render={() => (
                                <Redirect to="/404" />
                            )}/>
                        </Switch>
                    </div>
                    <FooterBlock/>
                </>
            </Route>
        </Switch>
    )
}

export default App;