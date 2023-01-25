import React from "react";
import '../styles/lstyle.css';
import Navu from './Navu';

function Login() {
return (
<>
    <div id="nav1"><Navu/></div>
    <div class="container" id="dome13">
        <div class="container" id="resdesc13">
            <h2 style={{"color": "white"}}><br/>Login</h2>
        </div>
        <div id="loginfrms13">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input type="text" class="form-control" id="exampleInputUsername1"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <br/>
                <a class="btn btn-primary" href="/adash">Login</a>
            </form>

        </div>
    </div>
</>
)
}
;
export default Login;