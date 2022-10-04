import React from "react";

const About = () => { 
    return ( 
        <div> 
            <HeroAbout />
        </div>
    );
}

class AboutNavbar extends React.Component { 
    render() { 
        return ( 
            <>
            <Navbar expand="lg" style={{padding: '20px'}} class="">
            <Container>
                <Navbar.Brand href="#home">figureBrand</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto links">
                    <Nav.Link href="#home"><a className="item" href="#">Home</a></Nav.Link>
                    <Nav.Link href="#link"><a className="item" href="#">About</a></Nav.Link>
                    <Nav.Link href="#link"><a className="item" href="#">Projects</a></Nav.Link>
                    <Nav.Link href="#link"><a className="item" href="#">Help</a></Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                    <Nav.Link href="#link" id="inTouch"> Get in touch </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <hr style={{width: '90%', textAlign: 'center', margin: 'auto'}} />
            </>
        );
    }
}

class HeroAbout extends React.Component { 
    render() { 
        return ( 

        )
    }
}

export default About;