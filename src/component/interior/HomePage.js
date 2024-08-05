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
      src="https://www.decorilla.com/online-decorating/wp-content/uploads/2022/11/Luxury-interior-design-home-designing-1-scaled.jpeg"
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
      src="https://www.decorpot.com/images/blogimage1361284108interior-designs-for-master-bedroom.jpg"
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
      src="https://asset.skoiy.com/9b80a6f781ff336f/yrwwqpnyb7ys.jpg?w=970&q=90"
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
    src="https://media.designcafe.com/wp-content/uploads/2022/07/29185240/industrial-rustic-living-room-in-earthy-tones.jpg"
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
    src="https://img.freepik.com/free-photo/modern-living-room-interior-design_23-2150794637.jpgg"
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
    src="https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg"
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
    src="https://www.decorilla.com/online-decorating/wp-content/uploads/2019/06/modern-interior-design-grey-living-room2-scaled.jpeg"
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