import Nav from "react-bootstrap/Nav";

const Navbar = () => {
    return (
        <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <Nav.Link href="#">Home</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default Navbar;
