import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function BasicExample() {
  return (
    <Navbar expand="lg" className="p-4 navigation">
      <Container className='d-flex justify-content-between '>
        <Navbar.Brand href="#home" className='fw-bold text-white '>GPT-3</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="#home" className='text-white mx-4' >Home</Nav.Link>
            <Nav.Link href="#link" className='text-white mx-4'>What is GPT?</Nav.Link>
            <Nav.Link href="#home" className='text-white mx-4'>OpenAi</Nav.Link>
            <Nav.Link href="#link" className='text-white mx-4'>CaseStudies</Nav.Link>
            <Nav.Link href="#link" className='text-white mx-4'>Libary</Nav.Link>
          </Nav>
          <Nav className='section2'>
          <Nav.Link href="#link" className='text-white mx-3 '>Sign in</Nav.Link>
          <button className='btn text-white px-4 signupbtn'>Sign up</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
