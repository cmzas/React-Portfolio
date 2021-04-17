import React from 'react'


const Projectcard = (props) => {
    return (
        <>
          <div class="col-md-6 mt-5 mb-2">
          <div class="card">
            <div class="inner">
              <img class="card-img-top" src={props.image} alt="image" />
            </div>
            <div class="card-body">
              <h4 class="card-title"><a href="#">{props.title}</a></h4><br/><br/>
              <p class="date1"><i class="far fa-clock"></i>{props.date} <i class="fas fa-comment"></i><a href="#">32 comments</a></p>

              <p class="card-text">{props.text}</p>
            </div>
          </div>
        </div>
            
        </>
    )
}

export default Projectcard;
