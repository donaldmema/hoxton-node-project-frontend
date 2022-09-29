import { SetStateAction, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import { CompanyDetails } from "./pages/CompanyDetails";
import { CompanyReviews } from "./pages/CompanyReviews";
import { Employers } from "./pages/Employers";
import { FindJobs } from "./pages/FindJobs";
import { JobDetails } from "./pages/JobDetails";
import { PostReviews } from "./pages/PostReviews";
import { RecentSearchPage } from "./pages/RecentSearchPage";
import { SignInPage } from "./pages/SignInPage";
import { Jobs } from "./types";

function App() {
  const [jobs, setJobs] = useState<Jobs[]>([]);
  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate to="/homepage" />} />
        <Route
          path="/homepage"
          element={<FindJobs jobs={jobs} setJobs={setJobs} />}
        />
        <Route path="/company/:id" element={<CompanyDetails />} />
        <Route path="/companyreviews" element={<CompanyReviews />} />
        <Route path="/recentsearchpage" element={<RecentSearchPage />} />
        <Route path="/employers" element={<Employers />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/postreview/" element={<PostReviews />} />
        <Route path="/job-detail/:id" element={<JobDetails jobs={jobs} setJobs={setJobs} />} />
      </Routes>
    </div>
  );
}

export default App;
