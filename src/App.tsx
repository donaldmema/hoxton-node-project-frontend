import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import { CompanyDetails } from "./pages/CompanyDetails";
import { CompanyReviews } from "./pages/CompanyReviews";
import { Employers } from "./pages/Employers";
import { FindJobs } from "./pages/FindJobs";
import { PostReviews } from "./pages/PostReviews";
import { SignInPage } from "./pages/SignInPage";
import { CreateAccountPage } from "./pages/CreateAccountPage";
import { SelectRolePage } from "./pages/SelectRolePage";

import * as API from "./api";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  function signIn(data: { user: any; token: string }) {
    setCurrentUser(data.user);
    localStorage.token = data.token;
  }

  function signOut() {
    setCurrentUser(null);
    localStorage.removeItem("token");
  }

  useEffect(() => {
    if (localStorage.token) {
      API.validate().then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          signIn(data);
        }
      });
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate to="/homepage" />} />
        <Route
          path="/homepage"
          element={<FindJobs currentUser={currentUser} signOut={signOut} />}
        />
        <Route
          path="/company/:id"
          element={
            <CompanyDetails currentUser={currentUser} signOut={signOut} />
          }
        />
        <Route
          path="/companyreviews"
          element={
            <CompanyReviews currentUser={currentUser} signOut={signOut} />
          }
        />
        <Route path="/employers" element={<Employers />} />
        <Route
          path="/postreview/"
          element={<PostReviews currentUser={currentUser} signOut={signOut} />}
        />
        <Route path="/signin" element={<SignInPage signIn={signIn} />} />
        <Route path="/select-role" element={<SelectRolePage />} />
        <Route
          path="/sign-up"
          element={<CreateAccountPage signIn={signIn} />}
        />
      </Routes>
    </div>
  );
}

export default App;
