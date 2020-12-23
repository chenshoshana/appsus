const { NavLink } = ReactRouterDOM;

export function AppHeader(props) {

    return <nav>
        <ul className="nav-list">
            <li><h2><NavLink activeClassName="my-active" exact to="/">App</NavLink></h2></li>
            <li><h2><NavLink to="/keeper">Keeper</NavLink></h2></li>
            <li><h2><NavLink to="/mail">Mail</NavLink></h2></li>
            {/* <li><NavLink to="/about">About</NavLink></li> */}
        </ul>
    </nav>
}

