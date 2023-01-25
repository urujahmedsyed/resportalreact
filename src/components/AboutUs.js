import React from 'react';
import Sampledata from "./sample.json"
import '../styles/restable.css';
import '../styles/about.css';
const AboutUs = () => {
    //console.log(Sampledata)
    return (
        <div>
            <br/><br/>
            <h1> &nbsp;&nbsp;List of Something!!</h1>
            <h2> &nbsp;&nbsp;Data should be displayed below</h2>
            <br/>
            <table className="table" id="table123">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Latitude</th>
      <th scope="col">Longitude</th>
    </tr>
  </thead>
  <tbody>
    {
            Sampledata.map( (record) => {
                let id=record.id;
                let city =record.name;
                let la = record.lati ;
                let lo = record.lon;
                return (<tr><td>{id}</td><td>{city}</td><td>{la}</td><td>{lo}</td></tr>);
            })
            }

    </tbody></table>
            
        </div>
    );
};

export default AboutUs;