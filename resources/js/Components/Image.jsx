import React, { useState } from "react";

const Image = ({ className, src }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };
    return (
        <>
            {!imageLoaded && (
                <div
                    className={`w-full h-full bg-gray-300 animate-pulse ${className}`}
                ></div>
            )}
            <img className={className} src={src} onLoad={handleImageLoad} />
        </>
    );
};

export default Image;
