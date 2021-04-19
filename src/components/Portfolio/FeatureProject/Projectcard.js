import React from 'react'


const Projectcard = (props) => {
  return (
    <>
      <div class="col-md-6 mt-5 mb-2 container">
        <div class="cards">
          <div class="cards-image col-md-12 p-0">
            <img class="cards-img-top" src={props.image} alt="image" />
          </div>
          <div class="cards-body">
            <div className="cards-body-heading col-md-12">
            <h4 class="cards-title mt-3"><a href="#">{props.title}</a></h4>
            </div>
            <ul className="project-list pl-3">
              <li> <i class="far fa-clock pr-1"></i>{props.date}</li>
              <li> <i class="fas fa-comment pl-2 pr-1"></i><a href="#">32 comments</a></li>
            </ul>
            {/* <div className="col-md-12 mt-4">
              <div className="container">
              <div className="row">
                <div className="col-6  p-0 bg-primary">
                  <p>
                  <i class="far fa-clock"></i>{props.date}
                  </p>

                </div>
                <div className="col-6 p-0 bg-success">
                  <p>
                  <i class="fas fa-comment"></i><a href="#">32 comments</a>
                  </p>
                  
                </div>
                </div>
              </div>

            </div> */}
            <div className="card-body-text col-md-12 text-justify">
              <p class="card-text pb-3">{props.text}</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Projectcard;
