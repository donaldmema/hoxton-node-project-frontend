import { useEffect, useState } from "react";

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
            
        </div>
    )
}