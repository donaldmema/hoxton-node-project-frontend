import { NavLink } from 'react-router-dom';
import logoblack from '../assets/logoblack.png';
export function EmployersNavBar(){
    return(
        <div className="navbar-employer">
        <ul className="employer-navbar">
        <li className="employer-navbar-list"><img src={logoblack} width="200px" alt="indeed-logo" /></li>
        <li className="employer-navbar-list-left"><NavLink to={"/homepage"}>Find Jobs</NavLink></li>
        <li className="employer-navbar-list-left-two"><NavLink to="/companyreviews">Company Reviews</NavLink></li>
        <li className="employer-navbar-list-right"><NavLink to="/signin">Sign in</NavLink></li>
        <li className="employer-navbar-list-right-two"><NavLink to="/employers">Employers / Post Job</NavLink></li>
    
        </ul>
        </div>
    )
    }