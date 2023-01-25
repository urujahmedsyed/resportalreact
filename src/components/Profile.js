import React from "react";
import '../styles/prof.css';
import Nava from './Nava';

function Profile() {
return (
<>
    <div id="nav1"><Nava/></div>
    <br/><br/>
    <div class="container" id="dome16">
    <br/><br/>
        <h2 id="tres16"><u>Profile:</u></h2>
        <br/><br/>
        <h5>
            Name: John Doe<br/><br/>
            University: KMIT<br/><br/>
            Department: Department of Data Science<br/><br/>
            Position: Department Head<br/><br/>
            Username: jd123123
        </h5>
        
    </div>
    <br/>
</>
)
}
;
export default Profile;