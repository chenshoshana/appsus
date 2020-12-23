const { NavLink } = ReactRouterDOM;

export function AppHeader(props) {

    return <nav>
        <ul className="nav-list">
            <li><NavLink activeClassName="my-active" exact to="/">App</NavLink></li>
            <li><NavLink to="/keeper">Keeper</NavLink></li>
            <li><NavLink to="/mail">Mail</NavLink></li>
            {/* <li><NavLink to="/about">About</NavLink></li> */}
        </ul>
    </nav>
}

