import styled from 'styled-components';
import { ImageSliderContext } from '../../context/imageContext';
import { useContext } from 'react';

const StyledButton = styled.button`
    position: absolute;
    width: 40px;
    height: 40px;
    background: white;
    border: solid 2px black;
    border-radius: 30px;
    bottom: 10px;
    z-index: 5;
    cursor: pointer;

    &.left {
        left: -30px;
    }

    &.right {
        right: -30px;
    }
`;

export default function Button({ direction }) {
    const context = useContext(ImageSliderContext);
    
    return (
        <>
            <StyledButton 
            className={`${direction === 'left' ? 'left' : 'right'}`} 
            onClick={context.changeImageByArrow}
            />
        </>

    )
}