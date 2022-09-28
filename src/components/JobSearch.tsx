export function JobSearch(){
    return(
        <div className="job-search">
            <form className="job-search-form">
                <input className="job-search-input" type="search" placeholder="What" ></input>
                <input className="job-search-input" type="search" placeholder="Where"></input>
                <button className="job-search-btn">Find Jobs</button>
            </form>
        </div>
    )
}