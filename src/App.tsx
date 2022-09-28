import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import { CompanyDetails } from "./pages/CompanyDetails";
import { CompanyReviews } from "./pages/CompanyReviews";
import { Employers } from "./pages/Employers";
import { FindJobs } from "./pages/FindJobs";
import { PostReviews } from "./pages/PostReviews";
import { SignInPage } from "./pages/SignInPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate to="/homepage" />} />
        <Route path="/homepage" element={<FindJobs />} />
        <Route path="/company/:id" element={<CompanyDetails />} />
        <Route path="/companyreviews" element={<CompanyReviews />} />
        <Route path="/employers" element={<Employers />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/postreview/" element={<PostReviews />} />
      </Routes>
    </div>
  );
}

export default App;
