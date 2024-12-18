import { Link } from "react-router-dom"
import "../styles/nav_bar.css";

function Navbar() {
    return (
        <div className="navbar__containt">
            <h1 className="navbar__title">React MySql</h1>
            <ul className="navbar__links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/form">Create Task</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar