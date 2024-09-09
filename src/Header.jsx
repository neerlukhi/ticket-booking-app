import React, { useState } from 'react'
import './movie.css'
import { Nav, Navbar, Container, NavItem, OffcanvasBody, CloseButton, OffcanvasTitle, OffcanvasHeader, Offcanvas } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaTicket } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Header = () => {

    const [show, setShow] = useState(false);

    // const [search, setSearch] = useState('')

    // const handleChange = (e) => {
    //     setSearch(e.target.value);
    // };

    // const filteredData = data.filter(item =>
    //     item.name.toLowerCase().startsWith(search.toLowerCase())
    //   );

    return (
        <>
            <Navbar expand="lg" className="w-100 py-2">
                <Container>
                    <Navbar.Brand ><img src={require('./book my show/asset 34.jpg')} className='logo' alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between'>
                        <input
                            type="search"
                            placeholder='Search for Movies,Events,Plays,Sports and Activities'
                            value={search}
                            onChange={handleChange}
                            className='search form-control border text-black' />
                        <Nav className="main ms-auto align-items-center">
                            <Link to={'/ticketlist'} className='ms-lg-4 me-4 btn-danger'><FaTicket className='text-[30px]' /></Link>
                            <RxHamburgerMenu onClick={() => setShow(true)} className='fs-4 d-none d-lg-block' />
                            <Offcanvas style={{ width: '360px' }} placement="end" show={show} onHide={() => setShow(false)}>
                                <OffcanvasHeader>
                                    <OffcanvasTitle className='canvas-title'>Hey!</OffcanvasTitle>
                                    <CloseButton className="text-reset" onClick={() => setShow(false)} />
                                </OffcanvasHeader>
                                <OffcanvasBody className='p-0'>
                                    <div className="canvas-box">
                                        <div className="d-flex flex-row justify-content-start align-items-center">
                                            <div className="reward-img flex-shrink-0">
                                                <img src={require('./book my show/reward-login.jpg')} style={{ width: '40px', height: '40px' }} alt="" />
                                            </div>
                                            <span>Unlock special offers & great benefits</span>
                                            <div className="r-btn">
                                                <button className='btn border-danger text-danger reward-btn'>Login / Register</button>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className='p-0 side-box w-full flex flex-col'>
                                        <li className='flex'><i className="fa-regular fa-bell fa-xl"></i> Notification <i className="fa-solid fa-angle-right"></i></li>
                                        <li className='flex'><i class="fa-regular fa-credit-card"></i> Play Credit Card <i className="fa-solid fa-angle-right"></i></li>
                                        <li className='flex'><i class="fa-regular fa-comment-dots"></i> Help & Support <i className="fa-solid fa-angle-right"></i></li>
                                        <li className='flex'><i class="fa-solid fa-gear"></i> Account Settings <i className="fa-solid fa-angle-right"></i></li>
                                        <li className='flex'><i class="fa-solid fa-gift"></i> Reward <i className="fa-solid fa-angle-right"></i></li>
                                    </ul>
                                </OffcanvasBody>
                            </Offcanvas>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header