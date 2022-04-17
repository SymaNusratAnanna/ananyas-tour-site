import React from 'react';
import './Video.css';

const video = () => {
    return (
        
              <>
            <div className='my-4 mx-5'>
                <h2 className='tour-video-header'>Tour Videos</h2>
                <br />
                <iframe src="https://www.youtube.com/embed/7lvXbfNBIQg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            </>
        
    );
};

export default video;
