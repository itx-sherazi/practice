import React from "react";
import {
  Accordion,
  Carousel,
  Col,
  Container,
  FormCheck,
  FormGroup,
  Row,
} from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from 'react';
import {  Outlet } from "react-router-dom";
import Smallimagecartprops from "../Sub-components/Smallimagecartprops";
import { MdEco } from "react-icons/md";
import { ImAirplane } from "react-icons/im";
import { GiReturnArrow } from "react-icons/gi";
import { BiArchive } from "react-icons/bi";
import { BiPurchaseTag } from "react-icons/bi";
import Footersecound from "../Footersecound";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";


function Cartshop() {
  const [showCart, setShowCart] = useState(false);

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);
  return (
    <Container fluid>
      <Container>
        <Row>
          {/* First Column: Small Images */}
          <Col sm={6}>
            <div className=" hidden md:block">
              <Smallimagecartprops imgUral="center1.webp" />
              <Smallimagecartprops imgUral="center1.webp" />
              <Smallimagecartprops imgUral="center1.webp" />
              <Smallimagecartprops imgUral="center1.webp" />
              <Smallimagecartprops imgUral="center1.webp" />
            </div>
            <div className="block md:hidden">
              {/* image medium size carousal */}
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="center1.webp"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="center1.webp"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="center1.webp"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="center1.webp"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="center1.webp"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>

          {/* Second Column: Product Details */}
          <Col sm={6} style={{ padding: "20px" }}>
            {/* First Row: Product Info */}
            <div className="sticky top-0">
              <Row>
                <Col>
                  <span>
                    <span style={{ color: "#bec5d1" }}>
                      EMBROIDERED VELVET SHAWL VS-33
                    </span>
                    <br />
                    <br />
                    <span>
                      <b>PKR 19,990.00</b>
                    </span>
                    <br />
                    <span style={{ color: "#bec5d1" }}>SKU: BQU-VS-D33</span>
                    <br />
                    <span style={{ color: "#bec5d1" }}>
                      COLOR: BLACK | 1 PIECE
                    </span>
                    <br />
                  </span>
                  <hr />
                </Col>
              </Row>

              {/* Second Row: Additional Info (like quantity, buttons, etc.) */}
              <Row>
                <Col>
                  <span>
                    {" "}
                    <b> TYPE:</b>
                  </span>
                  <br />
                  <button
                    type="button"
                    className="border border-black w-40 h-10"
                  >
                    UNSTITCHED
                  </button>
                  &nbsp;&nbsp;&nbsp;
                  <button
                    type="button"
                    className="border border-#bec5d1 w-40 h-10"
                  >
                    STITCHED
                  </button>
                  <br />
                  <br />
                  <span>
                    {" "}
                    <b> SIZE:</b>
                  </span>
                  <br />
                  <button
                    type="button"
                    className="border border-black w-40 h-10"
                  >
                    DEFAULT
                  </button>
                  <br />
                  <span>
                    {" "}
                    <b> ADD ON:</b>
                  </span>
                  <br />
                  <FormGroup className="mb-3" controlId="formBasicCheckbox" />
                  <FormCheck type="checkbox" label="Lining + PKR 2000" />
                  <br />
                  <div
  className="flex justify-between items-center w-40 h-12 border-2 p-1.5"
  style={{ marginBottom: "20px" }}
>
  <span>
    <FaPlus />
  </span>
  <span className="text-xl">1</span>
  <span>
    <FaMinus />
  </span>
</div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexGrow: 1,
                    }}
                  >


              
              <button type="button"  class="bg-black w-[300px] h-[60px] text-white"   onClick={handleShowCart} > Subscribe </button>

                
                      
                  
                     
                   
                  </div>
                  {/* Accordion Section */}
                  <div style={{ marginTop: "20px" }}>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <BiPurchaseTag /> &nbsp;&nbsp; Description
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          {" "}
                          <BiArchive /> &nbsp;&nbsp; Product Details
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          {" "}
                          <ImAirplane />
                          &nbsp;&nbsp; Delivery
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          {" "}
                          <GiReturnArrow /> &nbsp;&nbsp;Returns and Exchange
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>
                          {" "}
                          <MdEco /> &nbsp;&nbsp; Care Instructions
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <hr />
      <div
        style={{
          textAlign: "center",
          fontSize: "39px",
          padding: "20px",
        }}
      >
        <span> Related Product</span>
      </div>

      {/* Related Products Section */}
      <div className="p-4">
        <Row>
          <Col md={3} sm={12} className="text-center">
            <img
              className="zoom-img img-fluid cursor-pointer"
              src="center2.webp"
              alt="Shawls"
            />
            <div className="mt-4">
              <span> EMBROIDERED PRINTED LAWN</span>
              <br />
              <span> UF-711</span>
              <br />
              <span> PKR 8,990.00</span>
            </div>
          </Col>
          <Col md={3} sm={12} className="text-center">
            <img
              className="zoom-img img-fluid cursor-pointer"
              src="center2.webp"
              alt="Shawls"
            />
            <div className="mt-4">
              <span> EMBROIDERED PRINTED LAWN</span>
              <br />
              <span> UF-711</span>
              <br />
              <span> PKR 8,990.00</span>
            </div>
          </Col>
          <Col md={3} sm={12} className="text-center">
            <img
              className="zoom-img img-fluid cursor-pointer"
              src="center2.webp"
              alt="Shawls"
            />
            <div className="mt-4">
              <span> EMBROIDERED PRINTED LAWN</span>
              <br />
              <span> UF-711</span>
              <br />
              <span> PKR 8,990.00</span>
            </div>
          </Col>
          <Col md={3} sm={12} className="text-center">
            <img
              className="zoom-img img-fluid cursor-pointer"
              src="center2.webp"
              alt="Shawls"
            />
            <div className="mt-4">
              <span> EMBROIDERED PRINTED LAWN</span>
              <br />
              <span> UF-711</span>
              <br />
              <span> PKR 8,990.00</span>
            </div>
          </Col>
        </Row>
      </div>

      {/* Footer Section */}
      <Footersecound />
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
    </Container>
  );
}

export default Cartshop;
