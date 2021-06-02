import React from 'react';
import feature_1 from "../../assets/images/features/feature_1.jpg";
import feature_2 from "../../assets/images/features/feature_2.jpg";
import feature_3 from "../../assets/images/features/feature_3.jpg";
import feature_4 from "../../assets/images/features/feature_4.jpg";
import {Paper} from '@material-ui/core';

import{NavLink} from 'react-router-dom';

import {Card,Button} from 'react-bootstrap';

const feature=()=>{
    return(
      <div className="row m-2 ">
            <Paper elevation={3} className="col-sm-12 col-lg-3 col-md-6 p-2 ">
<Card className="bg-info p-2 h-100">
  <Card.Img variant="top" src={feature_1} style={{height:'250px'}} />
  <Card.Body style={{textAlign:'center'}}>
    <Card.Title>Gastrointestinal Problems</Card.Title>
    <Card.Text>
    A newborn's ability to eat and digest food is essential to growth and development.
     Most babies are able to absorb nutrients and have normal bowel movements after being fed.
    </Card.Text>
    <Button variant="primary"><NavLink to="/services" className="btn-primary">Read More</NavLink></Button>  </Card.Body>
</Card>
</Paper>
<Paper elevation={3} className="col-sm-12 col-lg-3 col-md-6 p-2 ">
<Card className="bg-primary p-2 h-100">
  <Card.Img variant="top" src={feature_2} style={{height:'250px'}} />
  <Card.Body style={{textAlign:'center'}}>
    <Card.Title>Pediatric Pneumonia</Card.Title>
    <Card.Text>
    Pneumonia is an infection of the lungs that can be caused by viruses, bacteria, fungi and parasites. 
    Pneumonia is a secondary illness that develops because the viral or bacterial illness was there first.
    </Card.Text>
    <Button variant="warning"><NavLink to="/services" >Read More</NavLink></Button>
  </Card.Body>
</Card>
</Paper>

<Paper elevation={3} className="col-sm-12 col-lg-3 col-md-6  p-2 ">
<Card className="bg-info p-2 h-100">
  <Card.Img variant="top" src={feature_3}  style={{height:'250px'}} />
  <Card.Body style={{textAlign:'center'}}>
    <Card.Title>Diarrhea</Card.Title>
    <Card.Text>
    The first bowel movement of a newborn is called meconium.
     This is a sticky, greenish-black substance that forms in the intestines during fetal development.
    </Card.Text>
    <Button variant="primary"><NavLink to="/services"  className="btn-primary">Read More</NavLink></Button>  </Card.Body>
</Card>
</Paper>

<Paper elevation={3} className="col-sm-12 col-lg-3 col-md-6  p-2 ">
<Card className="bg-primary p-2 h-100">
  <Card.Img variant="top" src={feature_4} style={{height:'250px'}}/>
  <Card.Body style={{textAlign:'center'}}>
    <Card.Title>Abdominal Distension</Card.Title>
    <Card.Text>
    Abdominal distension can occur in newborns and healthy infants.
     One of the prominent causes of abdominal distension in infants is swallowing of excess air.
    </Card.Text>
    <Button variant="warning"><NavLink to="/services" >Read More</NavLink></Button>  </Card.Body>
</Card>
</Paper>
        </div>
    );
}

export default feature;