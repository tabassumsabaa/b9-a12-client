import React from 'react';
import banner1 from "../../../assets/Image/b1.avif";
import banner2 from "../../../assets/Image/bg8.jpg";
import banner3 from "../../../assets/Image/bg6.png";
import "../Banner/banner.css";

const Banner = () => {
    return (
        <div className="carousel w-full h-64 sm:h-80 md:h-96 relative">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} alt="Banner 1" className="w-full object-cover rounded-lg shadow-lg" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 p-4">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#f6ab15]">Civic Engagement</h2>
                    <p className="mt-2 text-sm md:text-lg">Empowering communities to voice their opinions and drive change.</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} alt="Banner 2" className="w-full object-cover rounded-lg shadow-lg" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 p-4">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#f6ab15]">Informed Decision-Making</h2>
                    <p className="mt-2 text-sm md:text-lg">Access the insights you need to make impactful decisions.</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} alt="Banner 3" className="w-full object-cover rounded-lg shadow-lg" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 p-4">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#f6ab15]">Community Surveys</h2>
                    <p className="mt-2 text-sm md:text-lg">Gather valuable feedback to improve services and policies.</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
