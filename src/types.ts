export type Jobs = {
    id: number;
    title: string;
    location: string;
    details: [];
    jobSummary: string;
    jobDescription: string;
    createdAt: string;
    companyId: number;
    jobApplication: [];
  };
export type Company = {
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