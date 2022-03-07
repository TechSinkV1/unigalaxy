import React from 'react';
import deeplearning from '../../images/deep learning.png'
import dataanalyse from '../../images/data analyse.png'
import fullstack from '../../images/fullstack.png'
import ibm from '../../images/ibm.png'
import oop from '../../images/oop.png'
import projectmanaging from '../../images/project managing.png'
import uxdesign from '../../images/ux design.png'
import development from '../../images/webdevelopment.png'

const AllCourses = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">All Courses</h1>
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src={deeplearning} alt="content"/>
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">DEEP LEARNING</h3>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src={dataanalyse} alt="content"/>
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">DATA ANALYZE</h3>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src={fullstack} alt="content"/>
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">FULL STACK</h3>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src={ibm} alt="content"/>
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">IBM</h3>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src={oop} alt="content"/>
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">OBJECT ORIENTED PROGRAMMING</h3>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src={projectmanaging} alt="content"/>
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">PROJECT MANAGER</h3>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src={uxdesign} alt="content"/>
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">UX DESIGN</h3>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src={development} alt="content"/>
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">WEB DEVELOPMENT</h3>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllCourses;