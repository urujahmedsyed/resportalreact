import React from "react";
import '../styles/Nav.css';
function Navu() {
return (
<>
    <nav class="navbar navbar-expand-lg " style={{"background-color": "rgb(30, 30, 30)"}}>
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html"><i class="fa fa-rocket"></i>&nbsp; ResPortal</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/research">Research</a>
                    </li>
                </ul>
                <a class="btn btn-light" href="/login" role="button" id="lg" style={{"font-weight":"500"}}>Login</a>
                <a class="btn btn-light" href="pgs/signup.html" role="button" id="su" style={{"font-weight":"500"}}>Sign Up</a>
            </div>
        </div>
    </nav>
</>
)
}
;
export default Navu;