import { SetStateAction } from "react";
import { JobFeed } from "../components/JobFeed";
import { JobFeedDetails } from "../components/JobFeedDetails";
import { JobSearch } from "../components/JobSearch";
import { NavBarFindJobs } from "../components/NavBarFindJobs";
import { Jobs } from "../types";
type Props ={
    jobs:any
    setJobs: React.Dispatch<SetStateAction<Jobs[]>>
}
export function JobDetails({jobs, setJobs}:Props){
    return(
        <>
        <NavBarFindJobs />
        <JobSearch setJobs={setJobs }/>
        <JobFeedDetails jobs={jobs} setJobs={setJobs }/>
        </>
    )
}