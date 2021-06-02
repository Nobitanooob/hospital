import React,{useState} from 'react';

import image_1 from "../../assets/images/slider/slider_1.jpg";
import slider_2 from "../../assets/images/slider/slider_2.jpg";
import slider_3 from "../../assets/images/slider/slider_3.jpg";

import {Carousel,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

        function Carousel_content() {
            const [index, setIndex] = useState(0);
          
            const handleSelect = (selectedIndex, e) => {
              setIndex(selectedIndex);
            };
          
            return (
              <Carousel activeIndex={index} onSelect={handleSelect} className="w-100 h-100">
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={image_1}
                  alt="First slide"
                />
                <Carousel.Caption className=" p-2" style={{color:'black'}}>
                  <h3 style={{textDecoration:'underline'}}>Pediatric Pneumonia Treatment & Management </h3>
                  <p>Pneumonia is a lung infection that causes air sacs in your child’s lungs to fill with fluid or pus.<br /> 
                  The infection can be caused by a virus, bacteria or a fungus. <br />
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item >
                <Image
                  className="d-block w-100"
                  src={slider_2}
                  alt="Second slide"
                />
        
                <Carousel.Caption className=" p-2 " style={{color:'black'}}>
                  <h3 style={{textDecoration:'underline'}}>Symptoms of pediatric pneumonia in newborns</h3>
                  <p>Newborns and babies under a month old are the only age group that rarely cough as a direct consequence of pneumonia. <br />
                   The most common symptoms are irritability, not feeding properly, abnormally fast breathing  <br />
                   Shortness of breath and Grunting sounds.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={slider_3}
                  alt="Third slide"
                />
        
                <Carousel.Caption className=" p-2" style={{color:'black'}}>
                  <h3 style={{textDecoration:'underline'}}>Diagnosis of pediatric pneumonia</h3>
                  <p>
                  The temperature will typically be taken and the doctor will listen to their chest with a stethoscope.  <br />
                  A particular challenge is finding out whether the pneumonia is bacterial or viral in origin. <br />
                  A blood test can help determine whether an infection is present or not.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          );
          }

          export default Carousel_content;
  