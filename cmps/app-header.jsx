const { NavLink, withRouter } = ReactRouterDOM;


function _AppHeader(props) {

    return (
        // <div className="header">this is the header</div>
    
    
        
        
        
        <nav>
            <ul className="nav-list">
                <li><NavLink activeClassName="my-active" exact to="/">Apps Place</NavLink></li>
                <li><NavLink to="/mail">Mail</NavLink></li>
                <li><NavLink to="/keeper">Keeper</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>

            </ul>
        </nav>
        )
}

//HOC - higher order component
export const AppHeader = withRouter(_AppHeader);