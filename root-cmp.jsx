import { AppHeader } from './cmps/app-header.jsx'

const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

// Simple React Component
export class App extends React.Component {

    render() {
        return (



        <Router>
            <section className="app">
                <AppHeader />
                {/* <Switch>
                    <Route path="/book/:bookId" component={BookDetails}/>
                    <Route path="/book" component={MissBook}/>
                    <Route path="/about" component={About}/>
                    <Route path="/" component={Home}/>
                </Switch> */}
            </section>

        </Router>
        )
    }
}

