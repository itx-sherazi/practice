import React from 'react';
import { Col, Container, Row, } from 'react-bootstrap';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { BsSnapchat } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { Accordion } from 'react-bootstrap';

function Footer() {
  return (
    <Container fluid>
      {/* First Row - Newsletter Section */}
      <Row className="d-flex justify-content-center align-items-center text-center" style={{ height: '200px' }}>
  <Col md={6} sm={12}>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <span
        style={{
          fontSize: '24px',  // Adjust the font size here
          // fontWeight: 'bold',
        }}
      >
        SUBSCRIBE FOR NEWSLETTER
      </span>
    </div>
  </Col>
</Row>

{/* Input and Button Section */}
<Row className="d-flex justify-content-center align-items-center" style={{ height: '100px' }}>
  <Col md={6} sm={12} className="d-flex justify-content-center">
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
       
           <input
  type="text"
  placeholder="Enter your email"
  className="border border-black mr-2 p-2 w-72"
/>

     <button
  type="button"
  className="bg-black text-white py-2 px-5 w-36"
>
  Subscribe
</button>

    </div>
  </Col>
</Row>


      {/* 2nd part - Information Sections */}
      <Row style={{ paddingTop: '100px', paddingBottom: '20px' }}>
        <Col md={3} sm={12} className="text-center">
          <div className='hidden md:block'>
            <i className="fa-regular fa-clock" /><br />
            <span>Priority Stitching</span>
            <span>Receive your stitched orders more quickly</span>
            <span>In a timeline of 2 weeks</span>
          </div>
       
        </Col>
        <Col md={3} sm={12} className="text-center">
          <div className='hidden md:block'>
            <i className="fa-solid fa-laptop" /><br />
            <span>Custom Size</span>
            <span>Get your outfit tailored to perfection</span>
            <span>as per your desired measurements</span>
          </div>
        </Col>
        <Col md={3} sm={12} className="text-center">
          <div className='hidden md:block'>
            <i className="fa-solid fa-car-rear" /><br />
            <span>FREE SHIPPING</span>
            <span>We provide free shipping all across</span>
            <span>Pakistan on all of our orders</span>
          </div>
        </Col>
        <Col md={3} sm={12} className="text-center">
          <div className='hidden md:block'>
            <i className="fa-brands fa-first-order" /><br />
            <span>ORDER EXCHANGE</span>
            <span>Exchange your orders easily</span>
            <span>using our exchange form</span>
          </div>
        </Col>
      </Row>

      <hr />

      {/* About, Customer Service, Policies Sections */}
      <Row style={{ paddingTop: '50px' }}>
        <Col md={4} sm={12}>
          <div className='hidden sm:block'>
            <b> ABOUT</b>
            <br />
            <span>Who We Are</span>
            <br />
            <br />
            <span>Our Responsibility</span>
            <br />
            <br />
            <span>Service We Provide</span>
            <br />
            <br />
            <span>Careers</span>
            <br />
            <br />
            <span>Legal</span>
          </div>
          {/* Accordian section */}
           <div className='block sm:hidden'>
            <Accordion defaultActiveKey="0">
           <Accordion.Item eventKey="0">
        <Accordion.Header><b> ABOUT</b></Accordion.Header>
        <Accordion.Body>
        <span>
          Who We Are<br />
          Our Responsibility<br />
          Service We Provide<br />
          Careers<br />
          Legal
        </span>
        </Accordion.Body>
      </Accordion.Item>
     
    </Accordion>
           </div >

        </Col>
        <Col md={4} sm={12}>
          <div className='hidden sm:block'>
            <b> Customer Service</b>
            <br />
            <span>Contact Us</span>
            <br />
            <br />
            <span>Dispatch Timeline</span>
            <br />
            <br />
            <span>Email: info@baroque.pk</span>
            <br />
            <br />
            <span>Call: +92 325 700 1111</span>
            <br />
            <br />
            <span>WhatsApp: +92 325 7001111</span>
          </div>
          {/* Accordian section */}
           <div className='block sm:hidden'>
           <Accordion defaultActiveKey="0">
           <Accordion.Item eventKey="0">
        <Accordion.Header><b> Customer Service</b></Accordion.Header>
        <Accordion.Body>
            <span>
              Contact Us<br />
              Dispatch Timeline<br />
              Email: info@baroque.pk<br />
              Call: +92 325 700 1111<br />
              WhatsApp: +92 325 7001111
              </span>
              </Accordion.Body>
      </Accordion.Item>
     
    </Accordion>
           </div>
        </Col>
        <Col md={4} sm={12}>
          <div className='hidden sm:block'>
            <b> Policies</b>
            <br />
            <span>Privacy Policy</span>
            <br />
            <br />
            <span>Refund Policy</span>
            <br />
            <br />
            <span>Shipping Policy</span>
            <br />
            <br />
            <span>Terms of Service</span>
            <br />
            <br />
            <span>Exchange Information</span>
          </div>
          {/* Accordian section */}
           <div className='block sm:hidden'>
           <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header><b> Policies</b></Accordion.Header>
              <Accordion.Body>
                <span>
                  Privacy Policy<br />
                  Refund Policy<br />
                  Shipping Policy<br />
                  Terms of Service<br />
                  Exchange Information
                </span>
              </Accordion.Body>
            </Accordion.Item>
           </Accordion>

           </div>
        </Col>
      </Row>
      <div className="flex pt-5 items-center ">
      <FaFacebookF className="text-xl" />&nbsp;
      <FaInstagram className="text-xl" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <FaYoutube className="text-xl" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <FaTiktok className="text-xl" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <BsSnapchat className="text-xl" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <FaWhatsapp className="text-xl" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    
    <br />
    <Col>
    <Row className='ml-10'>
    <select className='w-40 border border-black'>
  <option value="USD">Pakistan</option>
  <option value="EUR">Dubai</option>
  <option value="GBP">saudi arbia</option>
  <option value="AUD">Lahore</option>
  <option value="CAD">oman</option>
  <option value="JPY">Canada</option>
  <option value="CNY">south africa</option>
  <option value="INR">India</option>
  <option value="BRL">Okara</option>
</select>
</Row>
</Col>
    </Container>
  );
}

export default Footer;
