import { getGifs } from './getGifs';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';  // import PropTypes
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const getImages = async () => {
            const imgs = await getGifs(category);
            setImages(imgs);
        };

        getImages();
    }, [category]); 

    return (
        <>
            <h1>{category}</h1>
            <p> Hello World</p>
            <div className='card-grid'>
                {
                    images.map((image) => (
                        <GifItem key={image.id} {...image} />
                    ))
                }
            </div>
        </>
    );
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired 
};
