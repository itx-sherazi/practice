import React from 'react'
import { Col,  Row, } from 'react-bootstrap';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { BsSnapchat } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { Accordion } from 'react-bootstrap';

function Footersecound() {
  return (
<>
<hr  className='mt-10'/>
 {/* Accordian section */}
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
      <hr className='mt-10'/>
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
</>
  )
}

export default Footersecound