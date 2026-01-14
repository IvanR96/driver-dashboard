export const DashBoard = () =>{

    const currentDate = new Date().toLocaleString();

    const dayName = new Date().toLocaleDateString("en-US", {
  weekday: "long"
});
    
    
    return(
        <div className="container d-flex flex-column col-xxl-8 col-8 col-md-8 col-sm-12 w-50 pt-0 my-0">
    <div className="column g-5">
      <div className="">
        <img
          src="/truck.jpg"
          className="d-block img-fluid"
          alt="truck photo"
          width="700"
          height="500"
          loading="lazy"
        />
      </div>
      <div className="col-lg-8">
        <h1 className="display-5 fw-bold lh-1 mb-3">
            {`Today is
             ${dayName} ${currentDate}`}
        </h1>
        <p className="lead">
          Quickly design and customize responsive mobile-first sites with Bootstrap...
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button className="btn btn-primary btn-lg px-4 me-md-2">
            Primary
          </button>
          <button className="btn btn-outline-secondary btn-lg px-4">
            Default
          </button>
        </div>
      </div>
    </div>
  </div>
    )
}