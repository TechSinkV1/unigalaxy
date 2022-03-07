import React from 'react';

const Introduction = () => {
    return (
        <div className='container mx-auto py-24 flex justify-between items-center'>
            <div className="left-about">
                <div className="courses-heading text-5xl w-3/4 border-l-2 border-green-600">
                    <span className='text-green-600 pl-6'>About</span> <span>Us</span>
                    <p className='text-xl py-4 pl-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus doloribus vitae voluptatum, rerum eaque harum libero at molestias temporibus omnis.</p>
                </div>
                    <p className='py-10 text-xl w-3/4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quae rerum animi corporis assumenda deserunt minima ad natus optio earum, suscipit qui, perspiciatis provident nemo ab quia harum voluptates cum.</p>
                    <button type="button" class="inline-block px-12 py-5 bg-green-500 text-white font-semibold text-xl leading-tight uppercase rounded-full shadow-md hover:bg-white hover:text-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out mr-10
                    ">About Us</button>
            </div>
            <div className="right-about">
                <iframe width="660" height="415" src="https://www.youtube.com/embed/RaNy4JreNPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
            </div>
        </div>
    );
};

export default Introduction;