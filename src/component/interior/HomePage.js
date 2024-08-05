import React from 'react'
import {Carousel} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <div> 
      {/* <h2 style={{textAlign:'center',color:'green'}}>Interior Slides</h2> */}
      <marquee>Interior AboutLink<Link to='/about'>Link.....</Link></marquee>
    
    <Carousel>
   
  <Carousel.Item>
  
    <img
      className="d-block w-100"
      src="interior/yrwwqpnyb7ys.jpg"
      alt="First slide"
      style={{width:'1000px',height:'500px'}}
      
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="interior/pexels-fotoaibe-1571460.jpg"
      alt="Second slide"
      style={{width:'1000px',height:'500px'}}
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="interior/images.jpeg"
      alt="Third slide"
      style={{width:'1000px',height:'500px'}}
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  
  <img
    className="d-block w-100"
    src="interior/image6.webp"
    alt="First slide"
    style={{width:'1000px',height:'500px'}}
    
  />
  <Carousel.Caption>
    <h3>Four slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  
  <img
    className="d-block w-100"
    src="interior/image5.jpeg"
    alt="First slide"
    style={{width:'1000px',height:'500px'}}
    
  />
  <Carousel.Caption>
    <h3>Fifth slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  
  <img
    className="d-block w-100"
    src="interior/image4.jpg"
    alt="First slide"
    style={{width:'1000px',height:'500px'}}
    
  />
  <Carousel.Caption>
    <h3>Sixth slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  
  <img
    className="d-block w-100"
    src="interior/image3.jpg"
    alt="First slide"
    style={{width:'1000px',height:'500px'}}
    
  />
  <Carousel.Caption>
    <h3>Seventh slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption>
</Carousel.Item>

  
</Carousel>

    </div>
  )
}

export default HomePage
