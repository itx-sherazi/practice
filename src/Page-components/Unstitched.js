import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Props from '../Sub-components/Props';

import Footersecound from '../Footersecound';

function Unstitched(props) {
  return (
    <>
      <Container fluid>
        <div className="text-center text-3xl py-2">
          <span>Unstitched</span>
        </div>
        <hr />

        {/* Product Count */}
        <div className="text-center text-xl py-2">
          <span>35 Products</span>
        </div>
        <hr className="w-full" />
        <Container>
        <Row>
          {/* Accordion section */}

        <Col sm={3}>
            <div className='hidden md:block sticky top-40' style={{width: '250px', height: '900px' }}>
                <Accordion defaultActiveKey="0" style={{ height: '100%', overflowY: 'auto',top:'0' }}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Accordion Item #3</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Accordion Item #4</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Accordion Item #5</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Accordion Item #6</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </Col>



          {/* Product images section */}
          <Col sm={9}  className="text-clip mt-2">
            <Row>
              
                <Props imgUral="center1.webp"  hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="center1.webp"  hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="center1.webp"  hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="center1.webp"  hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="center1.webp"  hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="center1.webp"  hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="center1.webp"  hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="center1.webp"  hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="center1.webp"  hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="center1.webp"  hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="center1.webp"  hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="center1.webp"  hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="center1.webp"  hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="center1.webp"  hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="center1.webp"  hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="center1.webp"  hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
            
              
            </Row>
          </Col>
        </Row>
        </Container>
      </Container>
      <Footersecound className="mt-10" />
    </>
  );
}

export default Unstitched;
