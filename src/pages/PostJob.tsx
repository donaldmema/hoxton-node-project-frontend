import { SetStateAction, useEffect, useState } from "react";
import { EmployersNavBar } from "../components/EmployersNavBar";
import { NavBarFindJobs } from "../components/NavBarFindJobs";
import { Jobs } from "../types";
import "./PostJob.css";

type Props = {
    jobs: any;
    setJobs: React.Dispatch<SetStateAction<Jobs[]>>;
    currentUser: any;
    signOut: () => void;
  };

export function PostJob({ jobs, setJobs, currentUser, signOut}: Props) {
  useEffect(() => {
    fetch(`http://localhost:3005/jobs`)
      .then((resp) => resp.json())
      .then((jobsFromServer) => setJobs(jobsFromServer));
  }, []);

  return (
    <>
      <EmployersNavBar currentUser={currentUser} signOut={ signOut} />
      <h1 className="post-h1">READY TO HIRE?</h1>
      <form
        className="post-job"
        onSubmit={(event) => {
          event.preventDefault();
          let newJob = {
            title: event.target.title.value,
            location:event.target.location.value,
            jobSummary: event.target.jobSummary.value,
            jobDescription:event.target.jobDescription.value,
            companyId:Number( event.target.companyId.value),
            //details
            //jobapplications
          };
          fetch("http://localhost:3005/jobs", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newJob),
          }).then(() => {
            fetch("http://localhost:3005/jobs")
              .then((resp) => resp.json())
              .then((jobsFromServer) => setJobs(jobsFromServer));
          });
        }}
      >
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title?"
          required
        ></input>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="What's the location of the job?"
          required
        ></input>
        <textarea
          name="jobSummary"
          id="jobSummary"
          placeholder="Job Summary?"
          required
        ></textarea>
        <textarea
          name="jobDescription"
          id="jobDescription"
          placeholder="Job Description?"
          rows={5}
          required
        ></textarea>
        <input
          type="number"
          name="companyId"
          id="companyId"
          placeholder="Company Id?"
        ></input>
        <button className="review-btn">POST</button>
      </form>
    </>
  );
}
