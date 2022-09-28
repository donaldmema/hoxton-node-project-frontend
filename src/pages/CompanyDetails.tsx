import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
         <section className="company-detail">
      <>
        <div className="company">
            <img src={company.imageURL} width="400px" />
            
            <h3>{company.name}</h3>
            <p>{company.address}</p>
            <p>{company.email}</p>
            <p>{company.about}</p>
            <p>{company.website}</p>
            <h5>{company.rating} ⭐⭐⭐⭐⭐</h5>
            <p>
            <h3>Reviews</h3>
            {company.reviews.map((review) => (
              <>
                <h5>{review.content}</h5>
              </>
            ))}
          </p>
          <h3>Avaliable Jobs:</h3>
          <p>
            {company.jobs.map((job) => (
              <>
                <p>{job.title}</p>
              </>
            ))}
          </p>
          </div>
      </>
    </section>
        </>
    )
}