import { createContext, useState } from "react";

export const ImageSliderContext = createContext();

export default function ImageSliderContextProvider({ children }) {
    const [state, setState] = useState({
        images: ['pink', 'purple', 'red', 'green', 'yellow'],
        moving: {
            isMoving: false,
            direction: 'none'
        }
    })

    function nextImage() {
        const newArr = [...state.images];

        let first = newArr.shift();

        newArr.push(first)

        setState({
            ...state,
            images: newArr
        })
    }

    function previousImage() {
        const newArr = [...state.images];

        let last = newArr.pop();

        newArr.unshift(last)

        setState({
            ...state,
            images: newArr
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

            toggleMoving(isLeft ? 'left' : 'right');
    
            setTimeout(() => {
                if (isLeft) {
                    previousImage()
                } else {
                    nextImage()
                }
            }, 1500)
        }
    }


    return (
        <ImageSliderContext.Provider value={{ state, changeImageByArrow }}>
            {children}
        </ImageSliderContext.Provider>
    )
}