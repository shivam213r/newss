import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,useNavigate } from "react-router-dom";

function NavScrollExample(props) {
  const [Search, setSearch] = useState("")
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.searchn(Search);
    navigate("/" + Search);
  };
  return (
    <Navbar expand="lg" className=" navbar-dark bg-dark px-2 fixed-top">
      <Container fluid>
      <Link className="navbar-brand" to="/">NewsMonk</Link>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            
            navbarScroll
          >
             <Link className="nav-link" to="/entertainment">Entertainment</Link>
             <Link className="nav-link" to="/sports">Sports</Link>
             <Link className="nav-link" to="/science">Science</Link>
             <Link className="nav-link" to="/technology">Technology</Link>
             <Link className="nav-link" to="/business">Business</Link>
             <Link className="nav-link" to="/health">Health</Link>
          </Nav>
          <Form className="d-flex bg-dark text-white" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleSearch}
            />
            <Button variant="outline-secondary" >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;