import React from 'react'
import { cities } from './cities'
import Carousel from './Carousel'

function Slider() {
    return (
        <div className="carousel carousel-center w-full grid grid-cols-3 relative">
            <div className="carousel-item w-full">
                <Carousel images={cities.photo} />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>
    )
}

export default Slider