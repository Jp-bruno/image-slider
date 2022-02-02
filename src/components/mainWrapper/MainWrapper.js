import styled from 'styled-components';
import MainImagePanel from '../ImagesPanels/MainImagePanel';
import GallerySlider from '../ImagesPanels/ImagesGallerySlider';
import Button from '../buttons/Button';

const StyledWrapper = styled.div`
    position: relative;
    display: grid;
    place-items: center;
`;

export default function MainWrapper() {
    return (
        <StyledWrapper>
            <MainImagePanel />
            <Button direction='left' />
            <GallerySlider />
            <Button direction='right' />
        </StyledWrapper>
    )
}