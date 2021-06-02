import React from "react";
import { Paper } from "@material-ui/core";

import contact_1 from "../../assets/images/contact/contact_1.jpg";
import contact_2 from "../../assets/images/contact/contact_2.jpg";
import contact_3 from "../../assets/images/contact/contact_3.jpg";
import contact_4 from "../../assets/images/contact/contact_4.jpg";
import contact_5 from "../../assets/images/contact/contact_5.jpg";
import contact_6 from "../../assets/images/contact/contact_6.jpg";

import { Card, Image } from "react-bootstrap";
import "./contact.css";

export default function Contact() {

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   if (form.checkValidity() === false) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //   } else {
  //     setValidated(true);
  //     alert("Thanks for contacting us");
  //   }
  // };
  return (
    <React.Fragment>
      <div className="bg-dark m-auto row p-2 nav" style={{ color: "white" }}>
        <h4>C-DAC Mohali</h4>
        <h4>
          A-34, Phase 8, Industrial Area, Sahibzada Ajit Singh Nagar, Punjab
          160071
        </h4>
        <h4>0172 661 9000</h4>
      </div>

      <div className="main">
        <div className="row p-2 m-auto">
          <div className="col-sm-12 col-lg-6 img p-4 m-auto">
            <Image src={contact_4} className="m-auto img img-fluid" />
          </div>
          <div className="col-sm-12 col-lg-6 m-auto p-4">
            <Card className="p-2 h-100 m-auto">
              <Card.Body>
                <Card.Title className="head">
                  <h2> C-DAC Mohali </h2>
                </Card.Title>
                <p>
                  Centre for Development of Advanced Computing (C-DAC) is the
                  premier R&D organization of the Ministry of Electronics and
                  Information Technology (MeitY) for carrying out R&D in IT,
                  Electronics and associated areas. Different areas of C-DAC,
                  had originated at different times, many of which came out as a
                  result of identification of opportunities.
                  <br />
                  C-DAC has today emerged as a premier R&D organization in IT&E
                  (Information Technologies and Electronics) in the country
                  working on strengthening national technological capabilities
                  in the context of global developments in the field and
                  responding to change in the market need in selected foundation
                  areas. In that process, C-DAC represents a unique facet
                  working in close junction with MeitY to realize nation’s
                  policy and pragmatic interventions and initiatives in
                  Information Technology. As an institution for high-end
                  Research and Development (R&D), C-DAC has been at the
                  forefront of the Information Technology (IT) revolution,
                  constantly building capacities in emerging/enabling
                  technologies and innovating and leveraging its expertise,
                  caliber, skill sets to develop and deploy IT products and
                  solutions for different sectors of the economy, as per the
                  mandate of its parent, the Ministry of Electronics and
                  Information Technology, Ministry of Communications and
                  Information Technology, Government of India and other
                  stakeholders including funding agencies, collaborators, users
                  and the market-place.
                </p>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="row p-4">
          <div className="col-sm-12 col-lg-6 p-4">
            <Card className="p-2 h-100 m-auto">
              <Card.Body>
                <Card.Title className="head">
                  <h2>NIT Kurukshetra</h2>
                </Card.Title>

                <p>
                  National Institute of Technology Kurukshetra (NIT Kurukshetra
                  or NITKKR) is a public technical and research university
                  located in Kurukshetra. In December 2008, it was accredited
                  with the status of Institute of National Importance (INI). It
                  is one of the 30 National Institutes of Technology established
                  and administered by Government of India. It runs undergraduate
                  and postgraduate in programme Engineering and Doctor of
                  Philosophy programme in Engineering, Sciences and Humanities.
                  <br />
                  NIT Kurukshetra awards undergraduate B.Tech. in various
                  engineering fields in a four-year programme. It offers
                  postgraduate (PG) M.Tech. degrees in similar engineering
                  fields as well as Physics. The M.Tech. degree is awarded after
                  four semesters (two years) or two semesters for relevant PG
                  diploma holders. Ph.D. research programmes are offered in
                  engineering, sciences, humanities and social sciences as well
                  as computer applications. As of 2006 it also offers an MBA
                  degree.
                  <br />
                  The National Institutional Ranking Framework (NIRF) ranked
                  National Institute of Technology, Kurukshetra 41 in the
                  engineering ranking in 2019.
                </p>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-12 col-lg-6 img p-4 m-auto">
            <Image src={contact_5} className="m-auto img img-fluid" />
          </div>
        </div>

        <hr />

        <div className="row m-auto ">
          <Paper elevation={3} className="col-sm-12 col-lg-3 col-md-6 p-2 ">
            <Card className="bg-info p-2 h-100">
              <Card.Img
                variant="top"
                src={contact_1}
                style={{ height: "250px" }}
              />
              <Card.Body style={{ textAlign: "center" }}>
                <Card.Title>
                  <h1>Dr. P.K. Khosla</h1>
                </Card.Title>
                <Card.Text>
                  <h4>Executive Director, C-DAC Mohali</h4>
                </Card.Text>
              </Card.Body>
            </Card>
          </Paper>
          <Paper elevation={3} className="col-sm-12 col-lg-3 col-md-6 p-2 ">
            <Card className="bg-primary p-2 h-100">
              <Card.Img
                variant="top"
                src={contact_2}
                style={{ height: "250px" }}
              />
              <Card.Body style={{ textAlign: "center" }}>
                <Card.Title>
                  <h1>Dr. Jaspal Singh</h1>
                </Card.Title>
                <Card.Text>
                  <h4>Joint Director, C-DAC Mohali</h4>
                </Card.Text>
              </Card.Body>
            </Card>
          </Paper>

          <Paper elevation={3} className="col-sm-12 col-lg-3 col-md-6  p-2 ">
            <Card className="bg-info p-2 h-100">
              <Card.Img
                variant="top"
                src={contact_3}
                style={{ height: "250px" }}
              />
              <Card.Body style={{ textAlign: "center" }}>
                <Card.Title>
                  <h1>Dr. Satish Kumar </h1>
                </Card.Title>
                <Card.Text>
                  <h4>Executive Director, NIT Kurukshetra</h4>
                </Card.Text>
              </Card.Body>
            </Card>
          </Paper>

          <Paper elevation={3} className="col-sm-12 col-lg-3 col-md-6  p-2 ">
            <Card className="bg-info p-2 h-100">
              <Card.Img
                variant="top"
                src={contact_6}
                style={{ height: "250px" }}
              />
              <Card.Body style={{ textAlign: "center" }}>
                <Card.Title>
                  <h1>Dr. Gaurav Saini</h1>
                </Card.Title>
                <Card.Text>
                  <h4>Assistant Professor, NIT Kurukshetra</h4>
                </Card.Text>
              </Card.Body>
            </Card>
          </Paper>
        </div>
        <hr />
        <div className=" m-auto container">
          <div className=" row">
            <div className="col-sm-12 col-lg-6 col-md-6 m-auto">
              <iframe
                title="Contact us"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.349528980337!2d76.70187081497494!3d30.708572781645557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee9389eaaaab%3A0xba6e27c236df8a20!2sC-DAC%20Mohali!5e0!3m2!1sen!2sin!4v1622400862941!5m2!1sen!2sin"
                width="100%"
                height="500"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="col-sm-12 col-lg-6 col-md-6 p-4 m-auto">
              <Card className="bg-info p-2 h-100">
                <Card.Body>
                  <Card.Title className="head">
                    <h2>Contact us</h2>
                  </Card.Title>
                  <Card.Text>
                   <h5>C-DAC Mohali</h5>  
                   <h5>A-34, Phase-VIII, Industrial Area Mohali - 160071</h5>  
                   <h5>(Near Chandigarh) Punjab, India</h5>  
                    <h5>Phone: +91-172-2237052-55, 6619000</h5>
                    <h5>Fax: +91-172-2237050-51</h5> 
                  </Card.Text>

                  {/* <Form noValidate validated={validated} onSubmit={submitHandler}>
                    <Form.Group controlId="name" className="input">
                      <Form.Label>Name*</Form.Label>
                      <Form.Control required placeholder="Name" />
                    </Form.Group>

                    <Form.Group controlId="email" className="input">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control required type="email" placeholder="Email address" />
                    </Form.Group>
                    <Form.Group controlId="number" className="input">
                      <Form.Label>Contact number*</Form.Label>
                      <Form.Control required type="email" placeholder="Contact number" />
                    </Form.Group>

                    <Form.Group controlId="message" className="input">
                      <Form.Label>Your message*</Form.Label>
                      <Form.Control
                        as="textarea"
                        required
                        placeholder="Write your message here"
                      />
                    </Form.Group>

                    <Button
                      variant="success"
                      type="submit"
                      className="btn"
                    >
                      Submit
                    </Button>
                  </Form> */}
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark m-auto row p-2 nav" style={{ color: "white" }}>
        <h4>
          Designed and developed by Sanjeev & Monika, intern at C-DAC Mohali
          from NIT Kurukshetra
        </h4>
      </div>
    </React.Fragment>
  );
}
