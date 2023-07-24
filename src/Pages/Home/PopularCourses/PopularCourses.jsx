import React from 'react';

import courseImg1 from "../../../assets/images/web-design.png";
import courseImg2 from "../../../assets/images/graphics-design.png";
import courseImg3 from "../../../assets/images/ui-ux.png";

const courses = [
    {
        id: "01",
        title: "Web Design BootCamp-2022 for Beginners",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg1,
    },

    {
        id: "02",
        title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg2,
    },

    {
        id: "03",
        title: "UI/UX BootCamp for Beginners in 2022",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg3,
    },
];

const PopularCourses = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='mx-auto text-center md:w-3/12 my-16'>
                <h3 className='text-3xl font-bold uppercase underline underline-offset-8'>Popular Courses</h3>
            </div>
            <div className='lg:grid grid-cols-3 gap-8 py-6'>
                {courses.map((course) => (
                    <div key={course.id} className='border'>
                        <img className='rounded' src={course.imgUrl} alt="" />
                        <h2 className='text-lg my-4 font-bold'>{course.title}</h2>
                        <p className='text-start ps-4 font-semibold mb-4'>Lessons:{course.lesson} </p>
                        <div className='flex gap-8 ps-4'>
                            <p className='text-lg font-semibold'> Students:{course.students} </p>
                            <p className='text-lg font-semibold '>Rating: {course.rating}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularCourses;
