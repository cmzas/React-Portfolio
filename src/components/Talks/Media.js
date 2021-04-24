import React from 'react';
import {Link} from "react-router-dom";

const Media = (props) => {
    return (
        <>
            <div class="media flex-column flex-lg-row bg-white shadow-sm mt-4 mb-5">
                <div class="row">
                    <div class="col-lg-8 col-md-12 p-0">
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item" src={props.obj.videolink}></iframe>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 bg-white py-4">
                        <div class="media-heading">
                            <h4>{props.obj.videotitle}</h4>
                        </div>
                        <div class="media-date">
                            <ul>
                                <li><i class="fas fa-clock pr"></i> {props.obj.publisheddate}</li>
                                <li><i class="fas fa-video pl-1 pr-1"></i>{props.obj.mediatype}</li>
                            </ul>
                        </div>
                        <div class="media-text">
                            <p>{props.obj.videotext}</p>



                        </div>
                        <div className="media-button">
                            <Link to="/blog">Recent Blog Post</Link>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Media;
