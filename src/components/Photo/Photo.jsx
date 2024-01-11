import React from "react";

export default function Photo({ url, altText = "Mars Photo", onClick }) {
    return (
        <>
            <div className="w-fit h-fit rounded-lg shadow-md" onClick={onClick}>
                <img className="z-5 w-full h-full object-cover" loading="lazy" src={url} alt={altText} />
            </div>
        </>
    )
}