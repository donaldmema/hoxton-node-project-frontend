import { JobFeed } from "../components/JobFeed";
import { JobSearch } from "../components/JobSearch";
import { NavBarFindJobs } from "../components/NavBarFindJobs";

export function FindJobs(){
    return(
        <>
        <NavBarFindJobs />
        <JobSearch/>
        <JobFeed/>
        </>
    )
}