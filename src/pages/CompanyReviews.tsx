import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavBarFindJobs } from "../components/NavBarFindJobs";
type Company = {
  id:number,
  name:string,
  imageURL: string,
  rating: number,
  about:string,
  address: string,
  email : string,
  website :string,
  reviews: []
  jobs: []
  };

export function CompanyReviews(){
    const [companies, setCompanies] = useState<Company[]>([]);
  useEffect(() => {
    fetch("http://localhost:3005/companies")
      .then((resp) => resp.json())
      .then((companiesFromServer) => setCompanies(companiesFromServer));
  }, []);
    return(
        <>
        <NavBarFindJobs />
        <div className="company-reviews">
        <h1>Find great places to work</h1>
        <h3>Get access to millions of company reviews</h3>
        <h4>Company name or job title</h4>
        <form className="company-search-form">
        <input className="company-search-input" type="search" placeholder="search" ></input>
        <button className="company-search-btn">Find Companies</button>
        </form>
        <h2>Popular companies</h2>
        <div className="companies">
        {companies.map((company) => (
        <>
          <div className="company">
            <div link-div>
              <Link to={`/company/${company.id}`}>
              <div className="image">
                  <img src={company.imageURL} width="70px" />
                </div>
                <div className="content-company">
                  <h2>{company.name}</h2>
                  <p>{company.address}..</p>
                  <h5>{company.rating} ⭐⭐⭐⭐⭐</h5>
                </div>
    
              </Link>
            </div>
          </div>
        </>
      ))}
      </div>
        </div>
        </>
    )
}