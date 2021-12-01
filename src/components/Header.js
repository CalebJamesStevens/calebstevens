const Header = (props) => {
    return (
        <header className="header">
            <div className="header-item">
                <button/>
            </div>

            <div className="header-item">
                <h1 className="header-text">Caleb Stevens</h1>
            </div>
            
            <div className="header-item">
                <ul className="nav-items">
                    <li><a href="https://www.linkedin.com/in/caleb-s-0482ba139/">LinkedIn</a></li>
                    <li><a href="https://github.com/CalebJamesStevens">GitHub</a></li>
                </ul>
            </div>

        </header>
    )
}

export default Header