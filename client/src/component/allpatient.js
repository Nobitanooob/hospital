import React from "react";
import { Table } from "react-bootstrap";

export default function Allpatient(props) {

const datas = props.location.state.detail;
// console.log(datas);
// const datas =dataso.patientList;
  return (
    <>
    <div  
    style={{
        minHeight: "580px",
      }}
    >
     <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>PatientName</th>
            <th>Age</th>
            <th>Adhar Number</th>
            <th>Fever</th>
            <th>Fever Grade</th>
            <th>Respiratory Rate</th>
            <th>Chest Indrawing</th>
            <th>Diagnosis</th>
            <th>Other Observation</th>
            <th>File 1</th>
            <th>File 2</th>
            <th>File 3</th>
            <th>File 4</th>
            <th>File 5</th>
            <th>File 6</th>
            <th>File 7</th>
            <th>File 8</th>
            <th>File 9</th>
            <th>File 10</th>
            <th>File 11</th>
            <th>File 12</th>
            <th>File 13</th>
            <th>File 14</th>
          </tr>
        </thead>
        <tbody>
         {
          datas.map((data,i)=>( 
          <tr>
           <td>{i+1}</td>
            <td>{data.patientName}</td>
            <td>{data.age}</td>
            <td>{data.adhar}</td>
            <td>{data.fever}</td>
            <td>{data.grade}</td>
            <td>{data.respiratory}</td>
            <td>{data.chest}</td>
            <td>{data.diagnosis}</td>
            <td>{data.observation}</td>
            {data.fileUrl.map((item, j) => (
              <td>
                <a href={item} target="_blank" rel="noopener noreferrer">
                  Download file{j+1}
                </a>
              </td>
          ))}
          </tr>
          ))}
        </tbody>
      </Table> 
    </div>
    </>
  );
} 