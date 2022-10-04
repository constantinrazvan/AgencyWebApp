import React, {useEffect} from "react";
import '../Style/Home.css';

import {Navbar, Nav, Container, ButtonGroup, Carousel, CarouselItem} from 'react-bootstrap';

import {AiFillCheckCircle} from 'react-icons/ai';
import {IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin} from 'react-icons/io';

//images
import Excel from '../assets/images/excel.png';
import Acces from '../assets/images/acces.png';
import PowerPont from '../assets/images/ppt.png';
import Word from '../assets/images/word.png';

import Bootstrap from '../assets/images/bs.png';
import Node from '../assets/images/node.png'; 
import JavaScript from '../assets/images/js.png';

import ScrollToTop from '../Components/ScrollToTop/ScrollToTop';

const Home = () => { 

    useEffect(() => {
        document.title = "Home";
    })

    return ( 
        <div style={{backgroundColor: '#F8FAFF'}}> 
            <ScrollToTop />
            <HomeNavbar />
            <HomeHero />
            {/* <AboutSection /> */}
            <Members />
            <TehnologiesUsed />
            <Testimonials />
            <GetInTouch />
            <Footer />
        </div>
    );
}

class HomeNavbar extends React.Component { 
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

class HomeHero extends React.Component { 
    render() { 
        return ( 
            <> 
                <div className="hero">
                    <div className="container-fluid">
                        <div className="topText" style={{margin: 'auto', width: '60%', paddingTop: '30px', paddingBottom: '30px'}}>
                            <h1 style={{fontSize: '70px', lineHeight: '1.0'}}> <strong> Elevate your business <span className="elevate">from scratch</span> </strong> </h1>
                        </div>

                        <div className="middleText"> 
                            <div className="row columnsRow"> 
                                <div className="col-lg-3 col-sm-2 column"> 
                                    <h5> <AiFillCheckCircle />  Clean Code</h5>
                                </div>
                                <div className="col-lg-3 col-sm-2 column"> 
                                    <h5> <AiFillCheckCircle />  Clean Code</h5>
                                </div>
                                <div className="col-lg-3 col-sm-2 column"> 
                                    <h5> <AiFillCheckCircle />  Clean Code</h5>
                                </div>
                                <div className="col-lg-3 col-sm-2 column"> 
                                    <h5> <AiFillCheckCircle />  Clean Code</h5>
                                </div>
                            </div>
                            <p style={{fontSize: '17px', width: '55%', margin: 'auto', marginTop: '20px', marginBottom: '20px'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas massa nunc. Ut laoreet, erat at rhoncus hendrerit, turpis urna finibus ante, at ultricies eros lorem sit amet turpis.  </p>
                        </div>


                        <ButtonGroup style={{gap: '20px'}}> 
                            <button style={{borderRadius: '0px'}} class="btn" id="getStarted"> Get Started </button>
                            <button style={{borderRadius: '0px'}} class="btn" id="learnMore"> Learn More </button>
                        </ButtonGroup>
                    </div>
                </div>
            </>
        )
    }
}

// de refacut

// class AboutSection extends React.Component { 
//     render() { 
//         return ( 
//             <div className="aboutSection" style={{backgroundColor: '#F8FAFF'}}> 
//             {/* <div id="shape"></div> */}
//                 <div className="container"> 
//                     <div className="text"> 
//                     <div className="textChild">
//                         <h1 className="aboutSectionh1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
//                         <p className="aboutSectionP">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula neque ac ex imperdiet maximus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
//                     </div>
//                     </div>

//                     <div className="cards"> 
//                         <div className="cardsChildren">
//                         <div className="row"> 
//                             <div className="col-sm-2"> 
//                                 <AboutCard title="Lorem ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula neque ac ex imperdiet maximus." />
//                             </div>
//                         </div>

//                         <div style={{marginLeft: '200px', marginBottom: '20px', marginTop: '20px'}} className="row"> 
//                             <div className="col-sm-2"> 
//                                 <AboutCard title="Lorem ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula neque ac ex imperdiet maximus." />
//                             </div>
//                         </div>

//                         <div className="row">
//                             <div className="col-sm-2"> 
//                                 <AboutCard title="Lorem ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula neque ac ex imperdiet maximus." />
//                             </div>
//                         </div>
//                         </div>
//                     </div>


//                 </div>
//             </div>
//         ); 
//     }
// }

class Members extends React.Component { 
    render() { 
        return ( 
            <div className="memberSection"> 
                <h1> Meet the Creators </h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere aliquet ex, a gravida dolor varius cursus.  </p>
                <div className="container"> 
                    <div className="memberCards">
                        <div className="row"> 
                            <div className="col-lg-6">
                                <div className="shapeCircle"></div>
                                <h3 className="nameMember" > Name Surname </h3>
                                <p className="functionMember"> Full Stack Developer </p>
                                <div className="socialMember"> 
                                    <a className="socialMember" href="#"><IoLogoTwitter /></a>
                                    <a className="socialMember" href="#"><IoLogoInstagram /></a>
                                    <a className="socialMember" href="#"><IoLogoLinkedin /></a>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="shapeCircle"></div>
                                <h3 className="nameMember"> Name Surname </h3>
                                <p className="functionMember"> Accountant </p>
                                <div className="socialMember"> 
                                    <a className="socialMember" href="#"><IoLogoTwitter /></a>
                                    <a className="socialMember" href="#"><IoLogoInstagram /></a>
                                    <a className="socialMember" href="#"><IoLogoLinkedin /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class TehnologiesUsed extends React.Component { 
    render() { 
        return ( 
            <div className="tehnologies"> 

                <h1> Tehnologies that we are using </h1>
                <p className="tehnologiesParagraph"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac ante at diam efficitur tincidunt. Nulla condimentum suscipit sem, maximus sodales tellus venenatis id.  </p>

                <div className="container"> 
                    <div className="row"> 
                        {/* JS */}
                        <div className="col-md-4">
                            <div className="tehnologiesCard"> 
                                <div className="headerTehnologies"> 
                                    <img src={JavaScript} alt="tehnologies_photos" className="imageTehnologies"  />
                                    <h3 className="titleTehnologies"> JavaScript </h3>
                                </div>
                                <div className="bodyTehnologies"> 
                                    <p className="descriptionTehnologies"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac ante at diam efficitur tincidunt.Nulla condimentum suscipit sem, maximus sodales tellus venenatis id. </p>
                                </div>
                            </div>       
                        </div>

                        {/* Node */}
                        <div className="col-md-4">
                        <div className="tehnologiesCard"> 
                                <div className="headerTehnologies"> 
                                    <img src={Node} alt="tehnologies_photos" className="imageTehnologies" style={{marginRight: '5px'}} />
                                    <h3 className="titleTehnologies"> NodeJS </h3>
                                </div>
                                <div className="bodyTehnologies"> 
                                    <p className="descriptionTehnologies"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac ante at diam efficitur tincidunt.Nulla condimentum suscipit sem, maximus sodales tellus venenatis id. </p>
                                </div>
                            </div>                             
                        </div>

                        {/* Bootstrap */}
                        <div className="col-md-4">
                        <div className="tehnologiesCard"> 
                                <div className="headerTehnologies"> 
                                    <img src={Bootstrap} alt="tehnologies_photos" className="imageTehnologies"  />
                                    <h3 className="titleTehnologies"> Bootstrap </h3>
                                </div>
                                <div className="bodyTehnologies"> 
                                    <p className="descriptionTehnologies"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac ante at diam efficitur tincidunt.Nulla condimentum suscipit sem, maximus sodales tellus venenatis id. </p>
                                </div>
                            </div>     
                        </div>

                        {/* Excel */}
                        <div className="col-md-4">
                        <div className="tehnologiesCard"> 
                                <div className="headerTehnologies"> 
                                    <img src={Excel} alt="tehnologies_photos" className="imageTehnologies"  />
                                    <h3 className="titleTehnologies"> Excel </h3>
                                </div>
                                <div className="bodyTehnologies"> 
                                    <p className="descriptionTehnologies"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac ante at diam efficitur tincidunt.Nulla condimentum suscipit sem, maximus sodales tellus venenatis id. </p>
                                </div>
                            </div>     
                        </div>

                        {/* Acces */}
                        <div className="col-md-4">
                        <div className="tehnologiesCard"> 
                                <div className="headerTehnologies"> 
                                    <img src={Acces } alt="tehnologies_photos" className="imageTehnologies"  />
                                    <h3 className="titleTehnologies"> Acces </h3>
                                </div>
                                <div className="bodyTehnologies"> 
                                    <p className="descriptionTehnologies"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac ante at diam efficitur tincidunt.Nulla condimentum suscipit sem, maximus sodales tellus venenatis id. </p>
                                </div>
                            </div>     
                        </div>

                        {/* Word */}
                        <div className="col-md-4">
                        <div className="tehnologiesCard"> 
                                <div className="headerTehnologies"> 
                                    <img src={Word} alt="tehnologies_photos" className="imageTehnologies"  />
                                    <h3 className="titleTehnologies"> Word </h3>
                                </div>
                                <div className="bodyTehnologies"> 
                                    <p className="descriptionTehnologies"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac ante at diam efficitur tincidunt.Nulla condimentum suscipit sem, maximus sodales tellus venenatis id. </p>
                                </div>
                            </div>     
                        </div>

                        {/* PowerPoint */}
                        <div className="col-md-4">
                        <div className="tehnologiesCard"> 
                                <div className="headerTehnologies"> 
                                    <img src={PowerPont} alt="tehnologies_photos" className="imageTehnologies"  />
                                    <h3 className="titleTehnologies"> PowerPoint </h3>
                                </div> <br />
                                <div className="bodyTehnologies"> 
                                    <p className="descriptionTehnologies"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac ante at diam efficitur tincidunt.Nulla condimentum suscipit sem, maximus sodales tellus venenatis id. </p>
                                </div>
                            </div>     
                        </div>

                    </div>
                </div>
            </div>
        ); 
    }
}

class Testimonials extends React.Component { 
    render() { 
        return ( 
            <div className="testimonials"> 

                <h1 className="testimonialsTitle"> What our customers say? </h1>
                <p className="testimonialsSubtitle"> Some testimonials from those who used our services </p>

                <Carousel> 
                    <CarouselItem> 
                        <div className="row testimonialCards"> 

                            <div className="col-md-4">
                                <div className="testimonialCard"> 
                                    <div className="testimonialCardBody"> 
                                        <h1> 🥰 </h1>
                                        <h3 className="testimonalTitle"> John Doe </h3>
                                        <p className="testimonialStars"> ⭐️⭐️⭐️⭐️ </p>
                                        <p className="testimonialReview"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere aliquet ex, a gravida dolor varius cursus.  </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="testimonialCard"> 
                                    <div className="testimonialCardBody"> 
                                        <h1> 🤩 </h1>
                                        <h3 className="testimonalTitle"> John Doe </h3>
                                        <p className="testimonialStars"> ⭐️⭐️⭐️⭐️⭐️ </p>
                                        <p className="testimonialReview"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere aliquet ex, a gravida dolor varius cursus.  </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="testimonialCard"> 
                                    <div className="testimonialCardBody"> 
                                        <h1> 🥰 </h1>
                                        <h3 className="testimonalTitle"> John Doe </h3>
                                        <p className="testimonialStars"> ⭐️⭐️⭐️⭐️ </p>
                                        <p className="testimonialReview"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere aliquet ex, a gravida dolor varius cursus.  </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </CarouselItem>

                    {/* AICI SE SFARSESTE PRIMUL ITEM */}

                    <CarouselItem> 
                        <div className="row testimonialCards"> 

                            <div className="col-md-4">
                                <div className="testimonialCard"> 
                                    <div className="testimonialCardBody"> 
                                        <h1> 🥰 </h1>
                                        <h3 className="testimonalTitle"> John Doe </h3>
                                        <p className="testimonialStars"> ⭐️⭐️⭐️⭐️ </p>
                                        <p className="testimonialReview"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere aliquet ex, a gravida dolor varius cursus.  </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="testimonialCard"> 
                                    <div className="testimonialCardBody"> 
                                        <h1> 🤩 </h1>
                                        <h3 className="testimonalTitle"> John Doe </h3>
                                        <p className="testimonialStars"> ⭐️⭐️⭐️⭐️⭐️ </p>
                                        <p className="testimonialReview"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere aliquet ex, a gravida dolor varius cursus.  </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="testimonialCard"> 
                                    <div className="testimonialCardBody"> 
                                        <h1> 🥰 </h1>
                                        <h3 className="testimonalTitle"> John Doe </h3>
                                        <p className="testimonialStars"> ⭐️⭐️⭐️⭐️ </p>
                                        <p className="testimonialReview"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere aliquet ex, a gravida dolor varius cursus.  </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </CarouselItem>

                    {/* AICI SE SFARSESTE AL DOILEA ITEM */}

                    <CarouselItem> 
                        <div className="row testimonialCards">
                            <div className="col-md-4">
                                <div className="testimonialCard"> 
                                    <div className="testimonialCardBody"> 
                                        <h1> 🥰 </h1>
                                        <h3 className="testimonalTitle"> John Doe </h3>
                                        <p className="testimonialStars"> ⭐️⭐️⭐️⭐️ </p>
                                        <p className="testimonialReview"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere aliquet ex, a gravida dolor varius cursus.  </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="testimonialCard"> 
                                    <div className="testimonialCardBody"> 
                                        <h1> 🤩 </h1>
                                        <h3 className="testimonalTitle"> John Doe </h3>
                                        <p className="testimonialStars"> ⭐️⭐️⭐️⭐️⭐️ </p>
                                        <p className="testimonialReview"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere aliquet ex, a gravida dolor varius cursus.  </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="testimonialCard"> 
                                    <div className="testimonialCardBody"> 
                                        <h1> 🥰 </h1>
                                        <h3 className="testimonalTitle"> John Doe </h3>
                                        <p className="testimonialStars"> ⭐️⭐️⭐️⭐️ </p>
                                        <p className="testimonialReview"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere aliquet ex, a gravida dolor varius cursus.  </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </CarouselItem>

                </Carousel>
            </div>
        ); 
    }
}

class GetInTouch extends React.Component { 
    render() { 
        return ( 
            <div className="getInTouch"> 
            <h1> Get in Touch </h1>
                <div className="contactDetails">
                    <input type="name" placeholder="Name" /> <br />
                    <input style={{marginTop: '15px'}} type="email" placeholder="Email" /> <br />
                    <input style={{marginTop: '15px'}} type="subject" placeholder="Subject" /> <br />
                    <textarea style={{marginTop: '15px'}} type="message" placeholder="Message" /> <br />
                    <input style={{marginTop: '15px'}} type="submit" className="submitButton"/>
                </div>
            </div>
        );
    }
}

class Footer extends React.Component { 
    render() { 
        return ( 
            <div className="footer"> 

                <div className="footerElements">
                    <div className="row"> 
                        <div className="col-md-4"> 
                            <div className="shapeDreptunghi"></div>

                            <p> The latest actionable tips on the social media channels you use most, sent to your inbox weekly. </p>
                            
                            <h6> SUBSCRIBE TO OUR NEWSLETTER </h6>
                            
                            <div className="newsletter">
                                <input type="email" placeholder="Email" /> 
                                <button className="subscribe"> Subscribe </button>
                            </div>

                        </div>

                        <div className="col-md-2"> 
                            <h3> Company </h3>
                            <ul className="ulCompany">
                                <li><a className="footerLink" href="#"> About Us </a> <br /></li>
                                <li><a className="footerLink" href="#"> Projects </a> <br /></li>
                                <li><a className="footerLink" href="#"> Tehnologies </a> <br /></li>
                                <li><a className="footerLink" href="#"> Contact </a> </li>
                            </ul>
                        </div>

                        <div className="col-md-2"> 
                            <h3> Social </h3>
                            <ul className="ulSocial">
                                <li><a className="footerLink" href="#"> Twitter </a> <br /></li>
                                <li><a className="footerLink" href="#"> Facebook </a> <br /></li>
                                <li><a className="footerLink" href="#"> Instagram </a> <br /></li>
                                <li><a className="footerLink" href="#"> Linkedin </a> <br /></li>
                            </ul>
                        </div>

                        <div className="col-md-2"> 
                            <h3> Help </h3>
                            <ul className="ulHelp">
                                <li><a className="footerLink" href="#"> Privacy Policy </a> <br /></li>
                                <li><a className="footerLink" href="#"> Terms of Use </a> <br /></li>
                                <li><a className="footerLink" href="#"> Send Feedback </a> <br /></li>
                                <li><a className="footerLink" href="#"> Write a Review </a> <br /></li>
                            </ul>
                        </div>

                        <div className="col-md-2"> 
                            <h3> Contact </h3>
                            hello@emailcompany.com  <br />
                            <hr style={{width: '50px'}} />
                            +12345 67890  <br />
                            <hr style={{width: '50px'}} />
                            Beverly Hills, CA  <br />
                        </div>
                    </div>
                </div>

                <hr style={{width: '90%', textAlign: 'center', margin: 'auto'}} />
               
               <div className="footerElementUnderHr">
                <div className="row rowElementsUnderHs"> 
                        <div className="col-md-6 copyrightText">
                            <h4 className="CopyrightText"><span className="copyright">©2022</span> TeamName, Inc. <span className="copyright">All rights reserved.</span> </h4>
                        </div>

                        <div className="col-md-6 socialFooter" style={{textAlign: 'right'}}>
                            <a style={{fontSize: '30px', marginRight: '10px'}} id="footerSocial" href="#"><IoLogoTwitter /></a>
                            <a style={{fontSize: '30px'}} id="footerSocial" href="#"><IoLogoInstagram /></a>
                            <a style={{fontSize: '30px', marginLeft: '10px'}} id="footerSocial" href="#"><IoLogoLinkedin /></a>
                        </div>
                </div>
               </div>

            </div>
        );
    }
}

export default Home;