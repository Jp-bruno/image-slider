import { createContext, useRef, useState } from "react";

export const ImageSliderContext = createContext();

export default function ImageSliderContextProvider({ children }) {
    const [state, setState] = useState({
        images: ['pink', 'purple', 'red', 'green', 'yellow'],
        moving: {
            isMoving: false,
            direction: 'none'
        }
    })

    const imageRef = useRef('red');

    function moveImagens(direction) {
        const newArr = [...state.images];

        if (direction === 'left') {
            let last = newArr.pop();

            newArr.unshift(last);

        } else {
            let first = newArr.shift();

            newArr.push(first);
        }

        setState({
            ...state,
            images: newArr,
        })
    }

    function toggleMoving(direction) {
        setState({
            ...state,
            moving: {
                isMoving: !(state.moving.isMoving),
                direction: direction
            }
        })
    }

    function changeImageByArrow(ev) {
        if (state.moving.isMoving) {
            return
        } else {
            const isLeft = ev.target.classList.contains('left');

            if (isLeft) {
                imageRef.current = state.images[1]
            } 
            
            if (!isLeft) {
                imageRef.current = state.images[3]
            }

            toggleMoving(isLeft ? 'left' : 'right');

            setTimeout(() => {
                if (isLeft) {
                    moveImagens('left');
                } else {
                    moveImagens('right');
                }
            }, 1500)

        }
    }

    return (
        <ImageSliderContext.Provider value={{ state, changeImageByArrow, imageRef: imageRef.current }}>
            {children}
        </ImageSliderContext.Provider>
    )
}