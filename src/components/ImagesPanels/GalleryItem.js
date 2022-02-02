import styled from 'styled-components';
import { useContext } from 'react';
import { ImageSliderContext } from '../../context/imageContext';

const StyledGalleryItem = styled.div`

`;

export default function GalleryItem({image, index}) {
    const context = useContext(ImageSliderContext);

    

    return (
        <StyledGalleryItem 
        className={`image ${image} ${index === 2 ? 'mainImage' : ''} 
        ${context.state.moving.isMoving ? `moving-${context.state.moving.direction}` : ''}`}
        />
    )
}