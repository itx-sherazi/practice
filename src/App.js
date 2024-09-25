import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Pic from "./Pic";
import Shop from "./Shop";
import Footer from "./Footer";
import Chantelle from "./Page-components/Chantelle";
import Unstitched from "./Page-components/Unstitched";
import Shawals from "./Page-components/Shawals";
import Ready from "./Page-components/Ready";
import Bottoms from "./Page-components/Bottoms";
import Duppatas from "./Page-components/Duppatas";
import Login from "./Page-components/Login";
import CoustomForm from "./Page-components/CoustomForm";
import Secound from "./Page-components/Secound";
import Cartshop from "./Page-components/Cartshop";
import Loginnext from "./Page-components/Loginnext";





function App() {
  return (
    <div>
      <BrowserRouter>
        {/* Navigation (Header) will be shown on all pages */}
        <Navigation />

        <br />
        <br />
        <br />
        <hr />
        

        

        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <div>
                {/* Components specific to Home page */}
                <Pic />
                <hr />
                <Shop />
                <Footer />
                
         
              </div>
            }
          />

          {/* Other Routes with their specific components */}
          <Route path="/chantelle" element={<Chantelle />} />
          <Route path="/unstitched" element={<Unstitched />} />
          <Route path="/shawals" element={<Shawals />} />
          <Route path="/ready" element={<Ready />} />
          <Route path="/bottoms" element={<Bottoms />} />
          <Route path="/duppatas" element={<Duppatas />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/secound" element={< Secound/>} />
          <Route path="/cartshop" element={<Cartshop/>}/>
          <Route path="/loginnext" element={<Loginnext/>} />
          <Route path="/CoustomForm" element={<CoustomForm/>} />
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
