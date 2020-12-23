

function _AppHeader(props) {

    return <nav>
        <ul className="nav-list">
            <li><NavLink activeClassName="my-active" exact to="/">Home</NavLink></li>
            <li><NavLink to="/book">Miss Book</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
        </ul>
    </nav>;
}