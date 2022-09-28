import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Job = {
  id: number,
  title: string,
  location: string,
  details:[],
  jobSummary: string,
  jobDescription: string
  createdAt:string,
  companyId:number,
  jobApplication:[]
  };
  
export function JobFeed(){
    const [jobs, setJobs] = useState<Job[]>([]);
  useEffect(() => {
    fetch(`http://localhost:3005/jobs/}`)
      .then((resp) => resp.json())
      .then((jobsFromServer) => setJobs(jobsFromServer));
  }, []);
    return(
        <div className="job-feed">
          <ul>
          <Link className="jobfeed-btn" to={"#"}><button>Job feed</button> </Link>
            <Link className="jobfeed-btn" to={"#"}><button>Recent searches</button></Link>
          </ul>
        </div>
    )
}