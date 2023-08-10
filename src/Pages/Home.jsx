import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Slider from '../components/Carousel/Slider'
import Footer from '../components/Footer/Footer'
import Main from '../components/Main/Main'

function Home() {
    return (
        <>
        <div>
            <NavBar />
            <Main />
            <Slider />
            <Footer  />
        </div>

        </>
    )
}

export default Home