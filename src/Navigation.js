import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, Outlet } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";

function Navigation() {
  const [showCart, setShowCart] = useState(false);

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  return (
    <>
      <Navbar expand={false} className="bg-body-tertiary mb-3" fixed="top">
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <img src="headerimage.png" alt="img" />
          <div className="flex items-center justify-center cursor-pointer space-x-4 text-2xl">
  <Link to="/login">
    <VscAccount />
  </Link>
  
  <IoSearch />
  
  <BiShoppingBag onClick={handleShowCart} />
</div>

          <Navbar.Offcanvas id="offcanvasNavbar" placement="start">
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/chantelle">Chantelle</Nav.Link>
                <Nav.Link href="/unstitched">Unstitched</Nav.Link>
                <Nav.Link href="/shawals">Shawals</Nav.Link>
                <Nav.Link href="/ready">Ready</Nav.Link>
                <Nav.Link href="/bottoms">Bottoms</Nav.Link>
                <Nav.Link href="/duppatas">Duppatas</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
        
      </Navbar>

          {/* Right Side Cart Offcanvas */}
          <Offcanvas show={showCart} onHide={handleCloseCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Cart items go here */}
          <hr className="pt-3"/>
          <span> You are eligible for free shipping.</span>
          <div className="  absolute inset-x-10 bottom-0 h-32 ..." >
            <hr fluid />
            <span> Taxes and shipping calculated at check</span>
             <Link to="/CoustomForm">
            <button type="button" class="bg-black w-[300px] h-[60px] text-white absolute inset-x-1 bottom-0">Subscribe  </button>

            </Link>
  

</div>

        </Offcanvas.Body>
      </Offcanvas>
      <Outlet />
    </>
    
  );
}

export default Navigation;
