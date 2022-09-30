import { EmployersNavBar } from "../components/EmployersNavBar";
import { NavBarFindJobs } from "../components/NavBarFindJobs";
import employers from '../assets/employers.png';
import "./Employers.css";
import { Link } from "react-router-dom";
export function Employers(){
    return(
        <>
        <EmployersNavBar />
        <div className="employers-page">
        <div className="text-employers">
        <h1>You're here to hire.</h1>   
        <h1>We're here to help.</h1>
        <p>Post your job, interview candidates, and make offers all on Indeed. Start hiring today.</p>
       <Link to={"/postjob"}> <button>Post a job</button> </Link>
        </div>
        <div className="image-employers">
        <img src={employers} alt="emloyers-page" width="600px"/>
        </div>
        </div>
        <form>
        </form>
        </>
    )
}