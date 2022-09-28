import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavBarFindJobs } from "../components/NavBarFindJobs";
import "./PostReview.css";

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
  
type Reviews =
{
  id:number
  companyId:number
  userId:number
  rating:number
  content:string
}
export function PostReviews(){
    const [companies, setCompanies] = useState<Company[]>([]);
   useEffect(() => {
    fetch(`http://localhost:3005/companies`)
      .then((resp) => resp.json())
      .then((companiesFromServer) => setCompanies(companiesFromServer));
  }, []);

    return(
        <>
        <NavBarFindJobs />
        <form className="post-review"
        onSubmit={(event) => {
    
          event.preventDefault();
          let newReview = {
            content: event.target.content.value,
            rating:Number(event.target.rating.value),
            companyId:Number(event.target.companyId.value),
            userId:Number(event.target.userId.value)
          }
          fetch("http://localhost:3005/reviews",{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReview)
          }).then(()=>{
            fetch("http://localhost:3005/companies")
      .then((resp) => resp.json())
      .then((companiesFromServer) => setCompanies(companiesFromServer));
          })
          
        }}
      >
        <input
          type="text"
          name="content"
          id="text"
          placeholder="whats the review?"
          required
        ></input>
        <input
          type="number"
          name="userId"
          id="movieId"
          placeholder="user Id?"
        ></input>
        <input
          type="number"
          name="companyId"
          id="companyId"
          placeholder="company Id?"
        ></input>
        <input
          type="number"
          name="rating"
          id="rating"
          placeholder="Raiting?"
        ></input>
        <button className="review-btn">POST</button>
      </form>
        </>
    )
}