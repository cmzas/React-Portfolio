import React from 'react'

const Media = () => {
    return (
        <>
         <div class="media flex-column flex-lg-row bg-white shadow-sm mt-4 mb-5">
      <div class="row">
          <div class="col-lg-8 col-md-12 p-0">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/RS36gBEp8OI?rel=0"></iframe>
                    </div>
          </div>
          <div class="col-lg-4 col-md-12 bg-white py-4">
            <div class="media-heading">
                <h4>YouTube Video Lorem Ipsum</h4>
            </div>
          <div class="media-date">
              <ul>
                  <li><i class="fas fa-clock"></i> 10 June, 2018</li>
                  <li><i class="fas fa-video pl-1"></i> Video</li>
              </ul>
          </div>
          <div class="media-text">
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus penatibus et magnis dis parturient
                   montes, nascetur ridiculus mus.. Find out more about the conference in my</p>
                <p> 
                   <a href="#">Recent Blog Post</a>
              </p>
          </div>
      </div>
    </div>
     
    </div>
            
        </>
    )
}

export default Media;
