import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context";

const Navbar = () => {
    const [state, setState] = useContext(UserContext);
    return (
        <Nav>
            <Nav.Item>
                <Link to="/" className="nav-link">
                    Home
                </Link>
            </Nav.Item>
            {state.data && (
                <Nav.Item>
                    <NavLink >
                        Logout
                    </NavLink>
                </Nav.Item>
            )}
        </Nav>
    );
};

export default Navbar;
