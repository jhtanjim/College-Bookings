import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CollegeDetails = () => {
    const college = useLoaderData();

    return (
        <div>
            <div className="hero  my-24">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={college.collegeImage} className="max-w-sm rounded-lg shadow-2xl" alt={college.collegeName} />
                    <div>
                        <h1 className="text-5xl font-bold">{college.collegeName}</h1>
                        <p className="py-3">Rating: {college.collegeRating}</p>
                        <p>Number of Research: {college.numberOfResearch}</p>
                        <p className='my-2'>Admission Date: {college.admissionDate}</p>

                        <h2 className="text-xl font-bold my-4">Details: <span className='font-normal'>{college.details}</span> </h2>


                        <div className=''>
                            <h2 className="text-xl font-bold my-4">Events:</h2>
                            <ul>
                                {college.events.map((event, index) => (
                                    <li key={index}>{event}</li>
                                ))}
                            </ul>

                            <h2 className="text-xl font-bold my-4">Sports Facilities:</h2>
                            <ul>
                                {college.sports.map((sport, index) => (
                                    <li key={index}>{sport}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;
