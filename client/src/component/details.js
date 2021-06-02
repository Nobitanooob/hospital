import React from "react";
import { Table } from "react-bootstrap";

export default function Details(props) {
  const data = props.location.state.detail;
  const url = data.fileUrl;
  console.log(url);
  return (
    <div
      style={{
        paddingLeft: "200px",
        paddingRight: "200px",
        minHeight: "580px",
      }}
    >
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Feilds</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PatientName</td>
            <td>{data.patientName}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{data.age}</td>
          </tr>
          <tr>
            <td>Adhar Number</td>
            <td>{data.adhar}</td>
          </tr>
          <tr>
            <td>Fever</td>
            <td>{data.fever}</td>
          </tr>
          <tr>
            <td>Fever Grade</td>
            <td>{data.grade}</td>
          </tr>
          <tr>
            <td>Respiratory Rate </td>
            <td>{data.respiratory}</td>
          </tr>
          <tr>
            <td>Chest Indrawing</td>
            <td>{data.chest}</td>
          </tr>
          <tr>
            <td>Diagnosis</td>
            <td>{data.diagnosis}</td>
          </tr>
          <tr>
            <td>Other Observation</td>
            <td>{data.observation}</td>
          </tr>
          
          {url.map((item, i) => (
            <tr>
              <td key={i}>File{i + 1}</td>
              <td>
                <a href={item} target="_blank" rel="noopener noreferrer">
                  Download file
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
