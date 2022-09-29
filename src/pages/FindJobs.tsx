import { SetStateAction } from "react";
import { JobFeed } from "../components/JobFeed";
import { JobSearch } from "../components/JobSearch";
import { NavBarFindJobs } from "../components/NavBarFindJobs";
import { Jobs } from "../types";
import "./FindJobs.css";
type Props ={
    jobs: any,
    setJobs: React.Dispatch<SetStateAction<Jobs[]>>
}
export function FindJobs({jobs, setJobs}:Props){

    return(
        <>
        <NavBarFindJobs />
        <JobSearch setJobs={setJobs}/>
        <JobFeed jobs={jobs} setJobs={setJobs }/>
        </>
    )
}