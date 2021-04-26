import React from 'react'
import BannerComponent from "./AboutComponent/BannerComponent";
import Data from "../Data/About/BannerData";


const Banner = () => {
    
    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="row">
                        {Data.map(obj=>{
                                return(
                                    <BannerComponent
                                    image={obj.image}
                                    profilename={obj.profilename}
                                    bio={obj.bio}

                                    />

                                )
                            })}
                       
                    </div>
                </div>
            </div>


        </>
    )
}

export default Banner;
