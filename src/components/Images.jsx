import React from 'react';

const Image = ({ item }) => {
    return (
        <div className="">
            <img src={item.download_url} alt={item.author} className="w-full h-auto rounded-[1em]" />
        </div>
    );
};

export default Image;
