import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { JobFeed } from "../components/JobFeed";
import { NavBarFindJobs } from "../components/NavBarFindJobs";
import "./CompanyDetails.css";

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
  
export function CompanyDetails(){
    const [company, setCompany] = useState<Company | null>(null);
    const params = useParams();

   useEffect(() => {
    fetch(`http://localhost:3005/companies/${params.id}`)
      .then((resp) => resp.json())
      .then((companyFromServer) => setCompany(companyFromServer));
  }, []);

  if (company === null) return <h2>Loading... </h2>;
    return(
        <>
        <NavBarFindJobs />
         <section className="company-detail">
      <>
        <div className="company">
          <div className="header-company">
            <img src={company.imageURL} width="100px" />
            <div className="company-header-name">
            <h3>{company.name}</h3>
            <div className="company-rating-review">
            <h5>{company.rating} ⭐⭐⭐⭐⭐</h5>
            <p>{company.reviews.length} reviews</p>
            </div>
            </div>
            <div className="follow-review-btn">
            <button className="follow-btn">Follow</button>
            <button className="review-btn">Write a review</button>
            </div>
            </div>
            <p className="address"><i>{company.address}</i></p>
            <p>{company.email}</p>
            <p>{company.about}</p>
            <p className="website"><u>{company.website}</u></p>
          
          <h3>Avaliable Jobs:</h3>
          <p>
            <div className="all-jobs-company">
            {company.jobs.map((job) => (
              <>
              <div className="jobs-company">
                <h3><u>{job.title}</u></h3>
                <p>{job.location}</p>
                <p className="date-time">{job.createdAt}</p>
                <button>View job</button>
                </div>
              </>
            ))}
            </div>
          </p>
          <p>
            <h3>Reviews</h3>
            {company.reviews.map((review) => (
              <>
              <div className="reviews">
                <h5>{review.content}</h5>
              </div>
              </>
            ))}
          </p>
          </div>
      </>
    </section>
        </>
    )
}