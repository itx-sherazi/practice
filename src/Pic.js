
import Carousel from 'react-bootstrap/Carousel';
import { Link, Outlet } from 'react-router-dom';

function Pic() {
  return (
    <Carousel>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="slide1.webp"
    alt="First slide"
    style={{ height: '500px', objectFit: 'cover' }} // Control height here
  />

  {/* <!-- Button centered at the bottom --> */}
  <div class="absolute inset-x-0 bottom-0 flex justify-center mb-8 ">
     <Link to="/secound">   <button class="bg-black text-white py-2 px-4  rounded">Shop Now</button></Link>
     
   
  </div>
</Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slide2.jpeg"
          alt="Second slide"
          style={{ height: '500px', objectFit: 'cover' }} // Control height here
        />
        <div class="absolute inset-x-0 bottom-0 flex justify-center mb-8 ">
     <Link to="/secound">   <button class="bg-black text-white py-2 px-4  rounded">Shop Now</button></Link>
     
   
  </div>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slide3.jpeg"
          alt="Third slide"
          style={{ height: '500px', objectFit: 'cover' }} // Control height here
        />
      <div class="absolute inset-x-0 bottom-0 flex justify-center mb-8 ">
     <Link to="/secound">   <button class="bg-black text-white py-2 px-4  rounded">Shop Now</button></Link>
     
   
  </div>
      </Carousel.Item>
      <Outlet/> 
    </Carousel>
  );
}

export default Pic;
