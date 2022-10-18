import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom"
 
const Navbar = () => {
    return (
        <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <Link to="/" className="nav-link">Home</Link>
            </Nav.Item>
        </Nav>
    );
};

export default Navbar;
