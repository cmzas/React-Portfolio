import React from 'react';
import ProfileImage from "../../Images/profile.jpg";
import { Link } from "react-router-dom";
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Imagetemplate from "../../Images/blog-post-image.png";
import CommentBox from "./CommentBox";
import { useParams } from "react-router-dom";
import Data from "./BlogCardData";

const BlogDetail = () => {
    const { blogId } = useParams();
    const data=Data.find((blo)=>blo.id===blogId);
    return (
        <>
            <div className="jumbotron-fluid detail-banner-bg pb-4 mb-2">
                <div className="container text-center">
                    <div className="blog-heading">
                        <h1>{data.title}</h1>
                        <h2>The complete, step-by-step guide</h2>

                    </div>
                    <div className="blog-profile-image">
                        <img src={ProfileImage} alt="image" />
                    </div>
                    <div className="blog-date-list">
                        <ul>
                            <li><i class="far fa-clock pr-1"></i>June 18, 2018</li>
                            <li> <i class="fas fa-comment pr-1"></i><a href="#">32 comments</a></li>
                        </ul>

                    </div>
                </div>

            </div>

            <div className="blog-detail-container mt-5">
                <div className="container">
                    <div className="blog-content-image pb-2">
                        <img src={data.image} />
                    </div>
                    <div className="blog-content-text">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>

                    </div>
                    <div className="blog-content-button col-md-10 offset-md-1 text-center pb-4">
                        <div className="row">
                            <div className="col-md-6 pt-2">
                                <Link className="btn one"><i class="fas fa-desktop pr-2"></i>View Live Demo</Link>

                            </div>
                            <div className="col-md-6 pt-2">
                                <Link className="btn two"><i class="fab fa-github-alt pr-2"></i>View on Github</Link>

                            </div>
                        </div>

                    </div>
                    {/* quote */}
                    <div className="container pt-3 pb-3">
                        <div className="quote text-center">
                            <i class="fas fa-quote-right"></i>
                            <p>"Walking on water and developing software from a specification are easy if both are frozen."</p>
                            <h1>-Edward V Berard</h1>
                        </div>
                    </div>
                    <div className="blog-inner-content">
                        <h1>Heading Vestibulum Fringilla</h1>
                        <p>Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.</p>
                        <p>You can embed a tweet on your blog post:</p>
                        <div className="twitter">
                            <TwitterTweetEmbed className="twitter"
                                tweetId={'933354946111705097'}
                            />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
                        <ul class="list-group">
                            <li class="list-group-item"><i class="fas fa-hand-point-right"></i>Lorem ipsum dolor sit amet consectetuer.</li>
                            <li class="list-group-item"><i class="fas fa-hand-point-right"></i>Lorem ipsum dolor sit amet consectetuer.</li>
                            <li class="list-group-item"><i class="fas fa-hand-point-right"></i>Lorem ipsum dolor sit amet consectetuer.</li>
                            <li class="list-group-item"><i class="fas fa-hand-point-right"></i>Lorem ipsum dolor sit amet consectetuer.</li>
                        </ul>
                        {/* <p>Below are some code examples using the highlight.js plugin. You can customise the script to include more languages via their website if you need to. The stylesheet used in this template is atom-one-dark.css</p>
                        <div class="mb-5 code">
                            <pre><code class="html hljs xml">
                                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"card"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 18rem;"</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"card-img-top"</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"..."</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Card image cap"</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"card-body"</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"card-title"</span>&gt;</span>Card title<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"card-text"</span>&gt;</span>Some quick example text to build on the card title and make up the bulk of the card's content.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span>&gt;</span>Go somewhere<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
                                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                            </code></pre>
                        </div> */}

                        <div className="blog-video">
                            <h1>Responsive Video</h1>
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/RS36gBEp8OI?rel=0"></iframe>
                        </div>
                        <div className="blog-template">
                            <h1>Heading Inventore Veritatis Quasi</h1>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
                            <img src={Imagetemplate} alt="imagetemplate" />
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
                            <ul class="list-group">
                                <li class="list-group-item"><i class="fas fa-hand-point-right"></i>Lorem ipsum dolor sit amet consectetuer.</li>
                                <li class="list-group-item"><i class="fas fa-hand-point-right"></i>Lorem ipsum dolor sit amet consectetuer.</li>
                                <li class="list-group-item"><i class="fas fa-hand-point-right"></i>Lorem ipsum dolor sit amet consectetuer.</li>
                                <li class="list-group-item"><i class="fas fa-hand-point-right"></i>Lorem ipsum dolor sit amet consectetuer.</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
                        </div>

                    </div>
                    <div className="comment-box">
                        <h1>Comment</h1>
                        <div className="border-comment"></div>
                    <CommentBox />
                    </div>
                </div>
            </div>

        </>
    )
}

export default BlogDetail;
