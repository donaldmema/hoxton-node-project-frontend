import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png';

export function NavBarFindJobs(){
return(
    <div className="navbar-findjob">
    <ul className="find-job-navbar">
    <li className="find-job-navbar-list"><img src={logo} width="200px" alt="indeed-logo" /></li>
    <li className="find-job-navbar-list-left"><NavLink to={"/homepage"}>Find Jobs</NavLink></li>
    <li className="find-job-navbar-list-left-two"><NavLink to="/companyreviews">Company Reviews</NavLink></li>
    <li className="find-job-navbar-list-right"><NavLink to="/signin">Sign in</NavLink></li>
    <li className="find-job-navbar-list-right-two"><NavLink to="/employers">Employers / Post Job</NavLink></li>

    </ul>
    </div>
)
}