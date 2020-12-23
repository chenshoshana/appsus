import { AppHeader } from './cmps/app-cmps/app-header.jsx'
import { KeeperApp } from './pages/keeper-pages/keeper-app.jsx';
import { MailApp } from './pages/mail-pages/mail-app.jsx'

const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

// Simple React Component
export class App extends React.Component {

    render() {
        return (

        <Router>
            <section className="app">
                <AppHeader />
                 <Switch>
                    {/* <Route path="/mail/:mailId" component={MailDetails}/> */}
                    <Route path="/mail" component={MailApp}/>
                    <Route path="/keeper" component={KeeperApp}/>
                    {/* <Route path="/" component={Home}/> */}
                </Switch> 
            </section>

        </Router>
        )
    }
}

