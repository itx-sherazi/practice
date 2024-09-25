import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate(); // Add this line

  function click() {
    let mail = document.getElementById('email').value;
    if (mail === "sheraz@gmail.com") {
      navigate('/loginnext'); // Use navigate instead of window.open
    }
  }

  return (
    <div className="w-full min-h-screen d-flex justify-content-center align-items-center" style={{ backgroundColor: '#f5f5f2' }}>
      <div className="w-full max-w-xl" style={{
        border: '1px solid white',
        width: '400px',
        height: '470px',
        backgroundColor: 'white',
        paddingLeft: '20px',
        borderRadius: '10px'
      }}>
        <Col>
          <Row className="box mb-2 d-flex justify-content-center align-items-center" style={{ height: '100px', }}>
            <img src="headerimage.png" alt="img"
              style={{
                width: '250px',
                height: '50px'
              }}
            />
          </Row>

          <Row className="box mb-2 d-flex justify-content-center align-items-center" style={{ height: '70px' }}>
            <span>
              <b>Log in </b><br />
              <span style={{
                color: '#c9c9c1'
              }}> Enter your email and we'll send you a login code</span>
            </span>
          </Row>
          <Row className="box mb-2 d-flex justify-content-center align-items-center" style={{ height: '70px' }}>
            <span>Email</span> <br />
            <input id='email'
              type="text"
              placeholder="Enter your email"
              style={{
                border: '1px solid black',
                marginRight: '50px',
                padding: '10px',
                width: '340px',
                borderRadius: '10px'
              }}
            />
          </Row>
          <Row className="box mb-2 d-flex justify-content-center align-items-center" style={{ height: '70px' }}>
            <button onClick={click}
              type="button"
              style={{
                padding: '10px 20px',
                backgroundColor: 'blue',
                opacity: '10px',
                color: 'white',
                width: '300px',
                fontSize: '20px'
              }}
            >
              Subscribe
            </button>
          </Row>
          <Row className="box mb-2 d-flex justify-content-center align-items-center" style={{ height: '70px' }}>
            <span style={{ color: 'blue', cursor: 'pointer' }}> Privacy</span>
          </Row>
        </Col>
      </div>
    </div>
  );
}

export default Login;
