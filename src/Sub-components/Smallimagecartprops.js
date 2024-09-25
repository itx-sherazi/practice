import React from 'react'
import { Col } from 'react-bootstrap'

function Smallimagecartprops(props) {
  return (
    <div>
      {/* small image */}
   <Col className='p-2'>
   <img src={props.imgUrl} alt={props.title}style={{
    width:'90px',

   }} />
   </Col>
   {/* big image */}
   <Col className='p-2'>
   <img src={props.imgUral} alt={props.title}style={{
    width:'900px',

   }} />
   </Col>
   </div>
  )
}

export default Smallimagecartprops;


