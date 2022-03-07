import React from 'react';
import image from '../../images/top-banner-model-1.png'
import './TopBanner.css'
const TopBanner = () => {
    return (
        <section className="top-banner">
            <div className="top-banner-inside container mx-auto flex justify-between items-center">
                <div className="top-banner-left w-3/5">
                    <h1 className='text-white text-7xl font-semibold'>MakeYour Own Career</h1>    
                    <p className='text-white py-6 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum necessitatibus consectetur porro ab ex iste quibusdam exercitationem praesentium neque dolorem</p>
                    <div className="buttons">
                    <button type="button" class="inline-block px-12 py-5 bg-green-500 text-white font-semibold text-xl leading-tight uppercase rounded-full shadow-md hover:bg-white hover:text-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out mr-10">About Us</button>
                    <button type="button" class="inline-block px-12 py-5 border-2 border-green-500 text-green-500 bg-white font-semibold text-xl leading-tight uppercase rounded-full hover:bg-green-600 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Contact Us</button>    
                    </div>
                </div>  
                <div className="top-banner-right pt-48">
                    <img src={image} alt="" />
                </div>
            </div>
        </section>
    );
};

export default TopBanner;