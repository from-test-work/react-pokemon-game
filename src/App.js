import {useLocation, Route, Switch, Redirect} from 'react-router-dom';
import cn from 'classnames';
import HomePage from "./routes/HomePage";
import GamePage from "./routes/GamePage";
import AboutPage from "./routes/AboutPage";
import ContactPage from "./routes/ContactPage";
import MenuHeader from "./components/MenuHeader";
import FooterBlock from "./components/FooterBlock";

import {FirebaseContext} from "./context/firebaseContext";

import style from './style.module.css'
import Firebase from "./service/firebase";

const App = () => {
    const location = useLocation();
    const isPadding = location.pathname === "/" || location.pathname === "/game/board";

    return (
        <FirebaseContext.Provider value={new Firebase()}>
            <Switch>
                <Route path="/404" render={() => (
                    <>
                        <h1>404 Error</h1>
                        <h2>Page not found</h2>
                    </>
                )}/>
                <Route>
                    <>
                        <MenuHeader bgActive={!isPadding}/>
                        <div className={cn(style.wrap, {[style.isHomePage]: isPadding})}>
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
        </FirebaseContext.Provider>
    )
}

export default App;