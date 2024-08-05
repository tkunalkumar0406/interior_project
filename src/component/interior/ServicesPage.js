import React from 'react'
// import services from "services.json";

import { BsArrowRight } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";


const ServicesPage = () => {
  const handleChange = (e) => {
    const pClass = e.target.parentElement;
    console.log("pClass1", pClass);
    if (e.target.className === "service-type") {
      for (let i = 0; i < pClass.childNodes.length; i++) {
        pClass.childNodes[i].className = "service-type";
      }
      e.target.classList.add("selected-type");
    } else if (e.target.className === "service-type selected-type") {
      for (let i = 0; i < pClass.childNodes.length; i++) {
        pClass.childNodes[i].className = "service-type";
      }
    }
  };

  const handleChangeTwo = (e) => {
    const pClass = e.target.parentElement.parentElement;
    console.log("pClass2", pClass);
    if (e.target.parentElement.className === "service-type") {
      for (let i = 0; i < pClass.childNodes.length; i++) {
        pClass.childNodes[i].className = "service-type";
      }
      e.target.parentElement.classList.add("selected-type");
    } else if (e.target.parentElement.className === "service-type selected-type") {
      for (let i = 0; i < pClass.childNodes.length; i++) {
        pClass.childNodes[i].className = "service-type";
      }
    }
  };
  return (
    <div className="services">
    <div className="services-header">
      <h1>
        Services<p>Home / Services</p>
      </h1>
    </div>
    {/* <div className="service-types">
      {services.services.map((type, index) => {
        return (
          <div className="service-type" onClick={handleChange} key={index}>
            <h2 onClick={handleChangeTwo}>{type.service_name}</h2>
            <p onClick={handleChangeTwo}>{type.service_content}</p>
            <Link to={`/servicesingle`}>
              <button>
                Read More{" "}
                <BsArrowRight style={{ marginLeft: "5px" }} color="#CDA274" />
              </button>
            </Link>
          </div>
        );
      })}
    </div> */}
    <div className="howWeWork">
      <div className="how-title">
        <h1>How We Work</h1>
        <p>
          It is a long established fact will be distracted.Lorem Ipsum is
          simply dummy text of the printing and typesetting industry.
        </p>
      </div>
      <div className="how-content">
          <div className="hc-img">
              <img src='interior/pexels-fotoaibe-1571460.jpg' alt='concept'></img>
          </div>
          <div className="hc-text">
              <div className="hc-text-anima">
                  <img src='interior/Icon1.svg' alt="icon"></img>
                  <p>01</p>
              </div>
              <div className="hc-subtext">
                  <h2>Concept & Details</h2>
                  <p>It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry. </p>
              </div>
          </div>
      </div>
          
      <div className="how-content">
          <div className="hc-text">
              <div className="hc-text-anima">
                  <img src='interior/Icon2.svg' alt="icon"></img>
                  <p>02</p>
              </div>
              <div className="hc-subtext">
                  <h2>Idea for work</h2>
                  <p>It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry. </p>
              </div>
          </div>
          <div className="hc-img">
              <img src='interior/services2.jpg' alt='concept'></img>
          </div>
      </div>
      
      <div className="how-content">
          <div className="hc-img">
              <img src='interior/services3.jpg' alt='concept'></img>
          </div>
          <div className="hc-text">
              <div className="hc-text-anima">
                  <img src='interior/Icon3.svg' alt="icon"></img>
                  <p>03</p>
              </div>
              <div className="hc-subtext">
                  <h2>Design</h2>
                  <p>It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry. </p>
              </div>
          </div>
      </div>
      
      <div className="how-content">
          <div className="hc-text">
              <div className="hc-text-anima">
                  <img src='interior/Icon4.svg' alt="icon"></img>
                  <p>04</p>
              </div>
              <div className="hc-subtext">
                  <h2>Perfection</h2>
                  <p>It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry. </p>
              </div>
          </div>
          <div className="hc-img">
              <img src='interior/services4.jpg' alt='concept'></img>
          </div>
      </div>
    </div>

    <div className="interno">
      <h1>Wanna join the interno?</h1>
      <p>It is a long established fact  will be distracted.</p>
      <Link><button>Contact With Us<AiOutlineArrowRight style={{ marginLeft: "5px"  }} color="#292F36" /></button></Link>
    </div>
  </div>
  )
}

export default ServicesPage
