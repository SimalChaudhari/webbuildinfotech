import React from 'react'

const AnimationBanner = () => {
    return (
        <div
            className="max-lg:flex-1 text-center"
         
        >
            <img
                src='/banner/test.png'
                alt="Innovative Teamwork"
                className="max-w-full h-full"
                style={{ maxHeight: '550px' }} // Slightly increased image size
            />
        </div>
    )
}

export default AnimationBanner