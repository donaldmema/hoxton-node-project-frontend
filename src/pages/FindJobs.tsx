import { Navigate, useNavigate } from "react-router-dom";
import { JobFeed } from "../components/JobFeed";
import { JobSearch } from "../components/JobSearch";
import { NavBarFindJobs } from "../components/NavBarFindJobs";
import "./FindJobs.css";

type Props = {
  currentUser: any;
  signOut: () => void;
};

export function FindJobs({ currentUser, signOut }: Props) {
  const navigate = useNavigate();
  return (
    <>
      {currentUser === "EMPLOYER" ? (
        navigate("/employers")
      ) : (
        <>
          <NavBarFindJobs currentUser={currentUser} signOut={signOut} />
          <JobSearch />
          <JobFeed />
        </>
      )}
    </>
  );
}
