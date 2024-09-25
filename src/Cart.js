import { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
import {  Outlet } from "react-router-dom";

function OffCanvasExample() {
  const [showCart, setShowCart] = useState(false);

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);


  return (
    <>
`          {/* Right Side Cart Offcanvas */}
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

function Cart() {
  return (
    <>
      {['end'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default Cart;