import React from 'react';
import aboutImg from '../../../assets/images/about-us.png'
import { FaBook, FaGraduationCap, FaUniversity } from 'react-icons/fa';
const About = () => {
    return (
        <div className="hero  bg-base-200 my-40">
            <div className="hero-content flex-col lg:flex-row-reverse gap-8">
                <img src={aboutImg} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='text-start'>
                    <h1 className="text-2xl lg:text-5xl font-bold">The Best Colleges</h1>
                    <p className="py-6 lg:text-lg">College, also known as university or higher education institution in some regions, is an educational institution that provides tertiary education beyond the high school level. It offers a wide range of academic programs and courses that lead to undergraduate and postgraduate degrees. Colleges are an essential part of the education system and play a crucial role in preparing students for their future careers..</p>
                    <div className='flex gap-4'>
                        <FaUniversity className='text-4xl'></FaUniversity>
                        <FaBook className='text-4xl'></FaBook>
                        <FaGraduationCap className='text-4xl'></FaGraduationCap>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;