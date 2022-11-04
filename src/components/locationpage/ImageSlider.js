
import '../../styles/locationpage/ImageSlider.css'
import leftArrow from '../../assets/vector-left.svg'
import rightArrow from '../../assets/vector-right.svg'
import { useState } from 'react'

function ImageSlider(props) {

    const [currentIndex, setCurrentIndex] = useState(0)
    const slides = props.slides
    const [hasOnePicture] = useState(slides.length === 1)

    const goToPrev = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return hasOnePicture ? (
        <div className="image-slider">
            <img className="slide" src={`${slides[currentIndex]}`} alt="vue de l'appartement"></img>
            <span className="counter">{currentIndex + 1}/{slides.length}</span>
        </div>
    ) : (
        <div className="image-slider">
            <img className="slide" src={`${slides[currentIndex]}`} alt="vue de l'appartement"></img>
            <button className="left-arrow-btn" onClick={goToPrev}>
                <img src={leftArrow} alt="aller à la slide précédente" className="arrow"></img></button>
            <button className="right-arrow-btn" onClick={goToNext}>
                <img src={rightArrow} alt="aller à la slide suivante" className="arrow"></img></button>
            <span className="counter">{currentIndex + 1}/{slides.length}</span>
        </div>
    )

}

export default ImageSlider