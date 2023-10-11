import {getGifs} from './getGifs';
import {useState, useEffect} from 'react';
import {GifItem} from './GifItem';

// eslint-disable-next-line react/prop-types
export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const images = await getGifs (category)
        setImages(images);
    }

    useEffect(() => {
        getImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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