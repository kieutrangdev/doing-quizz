import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                {/* <Navbar.Brand href="#">Doing Quizz</Navbar.Brand> */}
                <NavLink to="/" className="navbar-brand">Doing Quizz</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/' className='nav-link'>Home</Link>
                        <Link to='/users' className='nav-link'>User</Link>
                        <Link to='/admins' className='nav-link'>Admin</Link>
                    </Nav>
                    <Nav>
                        <button className='btn-login'>Log in</button>
                        <button className='btn-signup'>Sign up</button>
                        {/* <NavDropdown title="Setting" id="basic-nav-dropdown">
                            <NavDropdown.Item >Log in</NavDropdown.Item>
                            <NavDropdown.Item>
                                Log out
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                Profile
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;