import styled from 'styled-components';
import { useContext } from 'react';
import { ImageSliderContext } from '../../context/imageContext';

export default function GalleryItem({image, index}) {
    const context = useContext(ImageSliderContext);

    return (
        <div 
            className={
                `image ${image} ${index === 2 ? 'mainImage' : ''} 

                ${context.state.moving.isMoving ? `moving-${context.state.moving.direction}` : ''}`
            }
        />
    )
}