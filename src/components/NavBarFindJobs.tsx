import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { BsBellFill, BsPersonFill } from "react-icons/bs";

type Props = {
  currentUser: any;
  signOut: () => void;
};

export function NavBarFindJobs({ currentUser, signOut }: Props) {
  return (
    <div className="navbar-findjob">
      <ul className="find-job-navbar">
        <li className="find-job-navbar-list">
          <img src={logo} width="200px" alt="indeed-logo" />
        </li>
        <li className="find-job-navbar-list-left">
          <NavLink to={"/homepage"}>Find Jobs</NavLink>
        </li>
        <li className="find-job-navbar-list-left-two">
          <NavLink to="/companyreviews">Company Reviews</NavLink>
        </li>

        {currentUser === null ? (
          <>
            <li className="find-job-navbar-list-right">
              <NavLink to="/signin">Sign in</NavLink>
            </li>
            <li className="find-job-navbar-list-right-two">
              <NavLink to="/employers">Employers / Post Job</NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="find-job-navbar-list-right">
              <BsBellFill />
            </li>
            <li className="find-job-navbar-list-right-two">
              <BsPersonFill />
            </li>
            <li className="find-job-navbar-list-right-three">
              {currentUser.name}
            </li>
            <button
              onClick={() => {
                signOut();
                localStorage.removeItem("token");
              }}
            >
              Sign out
            </button>
          </>
        )}
      </ul>
    </div>
  );
}
