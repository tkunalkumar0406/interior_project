import React from 'react'


import { BsArrowRight } from "react-icons/bs";

const AboutPage = () => {
  return (
    <div>
      <div className="about">
      <div className="about-header">
        <h1>
          About Us<p>Home / About us</p>
        </h1>
      </div>
      <div className="quotes">
        <div className="pattern first">
          <p></p>
        </div>
        <div className="content">
          <h1>“</h1>
          <p className="comment">
            I like an interior that defies labeling. I don't really want someone
            to walk into a room and know that I did it
          </p>
          <p className="author">- BUNNY WILLIAMS</p>
        </div>

        <div className="pattern second"></div>
      </div>
      <div className="about-concept">
        <div className="con firstPart">
          <div className="c-text">
            <h1>What We Do</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>
            <button>
              Our Concept
              <BsArrowRight style={{ color: "#CDA274", marginLeft: "3%" }} />
            </button>
          </div>
          <div className="concept-img">
            <img src='https://images.squarespace-cdn.com/content/v1/596c0e3559cc68c91109f0d9/1659924920317-2104FUQH1GO09IXO6S2H/227A4932enfused.jpg?format=2500w' alt="concept"></img>
          </div>
        </div>

        <div className="con secondPart">
          <div className="concept-img">
            <img src='https://3.imimg.com/data3/IP/CU/MY-11666350/interior-design-500x500.jpg' alt="concept"></img>
          </div>
          <div className="c-text">
            <h1>What We Do</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>
            <button>
              Our Concept
              <BsArrowRight style={{ color: "#CDA274", marginLeft: "3%" }} />
            </button>
          </div>
        </div>
      </div>

      <div className="creative-pro">
        <h1>Creative project? Let's have a productive talk.</h1>
        <div className="creMailBox">
          <div className="creNameEmail">
            <input name="fullname" placeholder="Name" />
            <input name="mail" placeholder="Email" />
          </div>
          <div className="cre-text">
            <textarea
              name="interested"
              placeholder="Hello, I am interested in.."
            />
          </div>
          <div className="cre-send">
              <button>Send Now<BsArrowRight style={{ marginLeft: "5px" }} color="#CDA274" /></button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutPage
