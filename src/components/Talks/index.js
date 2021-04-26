import React from 'react'
import Media from "./Media";
import Hero from "../elements/Hero";
import MediaData from "../Data/Talk/MediaData";
import HeroData from "../Data/Hero/HeroData";

const Talkindex = () => {
    return (
        <>
            <Hero
                title={HeroData[0].title}
                text={HeroData[0].text}
            />
            <div class="media-bg pt-5 pb-5">
                <div class="container">
                    {MediaData.map(obj => {
                        return (
                            <Media
                                obj={obj}
                            />
                        )
                    })}




                </div>

            </div>

        </>
    )
}

export default Talkindex;
