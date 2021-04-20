import React from 'react';


const BlogCard = (props) => {
    return (
        <>
          <div class="col-12 col-md-4 col-lg-4 mt-5 pl-lg-0 pl-md-0">
        <div class="card rounded-0 border-0 shadow-sm">
            <div class="image-inner">
                <img class="card-img-top rounded-0" src={props.imagesrc} alt="image"/>
            </div>
            <div class="card-body pb-4">
                
                <h4 class="card-title mb-2"><a href="#">{props.title}</a></h4>
                <div class="card-text">
                    <p>{props.text}</p>
                </div>
                
            </div>
            <div class="card-footer border-0">
                <ul class="list-inline mb-0">
                    <li><i class="far fa-clock mr-2"></i> {props.date}</li>
                    <li><i class="fas fa-comment ml-2"></i><a href="#"> 12 Comments</a></li>
                </ul>
            </div>
        </div>


    </div>
            
        </>
    )
}

export default BlogCard
