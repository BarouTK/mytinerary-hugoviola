import React from 'react'
import Carousel from '../Carousel/Carousel'
import {cities} from '../Carousel/cities'
import { Link } from 'react-router-dom'

function Main() {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80)' }}>
            <div className="hero-overlay"></div>
            <div className="hero-content text-center text-neutral-content ">
                <div className="max-w">
                    <h1 className="mb-5 text-3xl font-bold text-white">Find your perfect trip, designed by insiders who know and love their cities!</h1>
                    <p className="mb-5">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier</p>
                    <button className="btn btn-info text-white"><Link to='./CityFiltre.jsx'>Get Started</Link></button>
                </div>
            </div>
            
        </div>
    )
}

export default Main