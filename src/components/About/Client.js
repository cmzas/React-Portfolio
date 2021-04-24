import React from 'react';
import ClientComponent from "./AboutComponent/ClientComponent";
import Carousels from "./AboutComponent/Carousels";
import ClientBadges from "./Array/ClientData";
import CarouselData from "./Array/CarouselData";



const Client = () => {
    return (
        <>

            <div className="col-md-12 pb-2 client-bg mt-5">
                {ClientBadges.map(obj => {
                    return (
                        <ClientComponent
                            obj={obj}
                        />
                    )
                })}
                {CarouselData.map(obj => {
                    return (
                        <Carousels
                            obj={obj}
                        />
                    )
                })}


            </div>

        </>
    )
}

export default Client;
