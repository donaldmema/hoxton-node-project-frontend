import { NavLink } from "react-router-dom";

export function NavBarFindJobs(){
return(
    <div className="navbar-findjob">
    <ul className="find-job-navbar">
    <li className="find-job-navbar-list"><img src="https://www.indeedevents.com/wp-content/uploads/2021/05/VirtualTradeshowbooth@2x.png" width="100px" alt="indeed-logo" /></li>
    <li className="find-job-navbar-list-left"><NavLink to={"/homepage"}>Find Jobs</NavLink></li>
    <li className="find-job-navbar-list-left-two"><NavLink to="/companyreviews">Company Reviews</NavLink></li>
    <li className="find-job-navbar-list-right"><NavLink to="/signin">Sign in</NavLink></li>
    <li className="find-job-navbar-list-right-two"><NavLink to="/employers">Employers / Post Job</NavLink></li>

    </ul>
    </div>
)
}