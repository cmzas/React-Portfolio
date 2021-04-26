import React from 'react';
import ScrollToTop from "react-scroll-up";

const ScrollToUp = () => {
    return (
        <>
            <ScrollToTop showUnder={160}>
                <span><i class="fas fa-arrow-circle-up"></i></span>
            </ScrollToTop>
        </>
    )
}

export default ScrollToUp;
