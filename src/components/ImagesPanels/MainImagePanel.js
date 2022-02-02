import styled from 'styled-components';
import { ImageSliderContext } from '../../context/imageContext';
import { useContext } from 'react';

const StyledMainImagePanel = styled.div`
    .imagem {
        width: 400px;
        border: solid 10px black;
        height: 350px;
        border-radius: 3px;
        transition: background-color .5s ease;
    }

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
`;

export default function MainImagePanel() {
    const context = useContext(ImageSliderContext);

    return (
        <StyledMainImagePanel>
            <div className={`imagem ${context.imageRef}`}></div>
        </StyledMainImagePanel>
    )
}