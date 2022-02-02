import styled from 'styled-components';
import { ImageSliderContext } from '../../context/imageContext';
import { useContext } from 'react';
import GalleryItem from './GalleryItem';

const StyledGallerySlider = styled.div`
    display: flex;
    width: 100%;
    height: 50px;

    @keyframes up1left {
        100% {
            top: -40px;
            transform: translateX(80%);
        }
    }

    @keyframes up2left {
        0% {
            z-index: 10;
        }
        100% {
            top: -50px;
            transform: translateX(80%);
            z-index: 10;

        }
    }

    @keyframes down1left {
        100% {
            top: -40px;
            transform: translateX(80%);
        }
    }

    @keyframes down2left {
        100% {
            top: -30px;
            transform: translateX(80%);
        }
    }

    /* ------ Right Keyframes --------- */


    @keyframes up1right {
        100% {
            top: -40px;
            transform: translateX(-80%);
        }
    }

    @keyframes up2right {
        100% {
            top: -50px;
            transform: translateX(-80%);
            z-index: 10;
        }
    }

    @keyframes down1right {
        100% {
            top: -40px;
            transform: translateX(-80%);
        }
    }

    @keyframes down2right {
        100% {
            top: -30px;
            transform: translateX(-80%);
        }
    }

    .image {
        width: 100px;
        height: 100px;
        border: solid 5px black;
        position: relative;
        margin: 0 -10px;
        left: auto;
        right: auto;

        /* For left */

        &:nth-of-type(1).moving-left {
            animation: up1left 1.5s ease;
            animation-fill-mode: both;
        }
    
        &:nth-of-type(2).moving-left {
            animation: up2left 1.5s ease;
            animation-fill-mode: both;
        }

        &:nth-of-type(3).moving-left {
            animation: down1left 1.5s ease;
            animation-fill-mode: both;

        }

        &:nth-of-type(4).moving-left {
            animation: down2left 1.5s ease ;
            animation-fill-mode: both;
        }

        &:nth-of-type(5).moving-left {
            transition: transform 1.5s ease, opacity 1.5s ease;
            transform: scale(0);
            opacity: 0;
        }

        /* For right */

        &:nth-of-type(1).moving-right {
            transition: transform 1.5s ease, opacity 1.5s ease;
            transform: scale(0);
            opacity: 0;
        }
            
        &:nth-of-type(2).moving-right {
            animation: down2right 1.5s ease backwards;
            animation-fill-mode: both;
        }

        &:nth-of-type(3).moving-right {
            animation: down1right 1.5s ease backwards;
            animation-fill-mode: both;
        }

        &:nth-of-type(4).moving-right {
            animation: up2right 1.5s ease backwards;
            animation-fill-mode: both;
        }

        &:nth-of-type(5).moving-right {
            animation: up1right 1.5s ease backwards;
            animation-fill-mode: both;
        }
    }

    /* The images heights in orgder */
    
    .image:last-of-type, .image:first-of-type {
        top: -30px;
    }

    .image:last-of-type {
        z-index: 3;
    }

    .image:nth-of-type(2n) {
        top: -40px;
        z-index: 4;
    }

    .mainImage {
        top: -50px;
        z-index: 5;
    }

    /* Colors (Images) */

    .pink {
        background: pink;
    }

    .purple {
        background: purple;
    }

    .red {
        background: red;
    }

    .green {
        background: green;
    }

    .yellow {
        background: yellow;
    }

    .falso {
        transform: scale(0);
        opacity: 0;
    }

    .falso.moving {
        transition: transform 1.5s ease, opacity 1.5s ease;
        transform: scale(1);
        opacity: 1;
    }

    .falso.esquerdo{
        position: absolute;
        width: 100px;
        height: 100px;
        border: solid 5px black;
        bottom: -20px;
        left: -10px;
        z-index: 0;
    }

    .falso.direito{
        position: absolute;
        width: 100px;
        height: 100px;
        border: solid 5px black;
        bottom: -20px;
        right: -10px;
        z-index: 0;
    }

`;

export default function GallerySlider() {
    const context = useContext(ImageSliderContext);

    return (
        <StyledGallerySlider>
            <span className={`falso esquerdo ${context.state.images[4]} ${context.state.moving.direction === 'left' ? 'moving' : ''}`}></span>
            {context.state.images.map((el, index) => {
                return <GalleryItem image={el} index={index} key={index}></GalleryItem>
            })}
            <span className={`falso direito ${context.state.images[0]} ${context.state.moving.direction === 'right' ? 'moving' : ''}`}></span>
        </StyledGallerySlider>
    )
}