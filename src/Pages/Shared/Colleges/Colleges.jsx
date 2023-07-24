import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Colleges = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(res => res.json())
            .then(data => {
                console.log(data); // Check if data is received correctly
                setColleges(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
            {colleges.map(college => (
                <div className="my-4" key={college.id}>
                    <div className="hero border-2 rounded">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={college.collegeImage} className="max-w-sm rounded-lg shadow-2xl" alt={college.collegeName} />
                            <div>
                                <h1 className="text-5xl font-bold">{college.collegeName}</h1>
                                <p className="py-3">Rating: {college.collegeRating}</p>
                                <p>Number of Research: {college.numberOfResearch}</p>
                                <p className='my-2'>Admission Date: {college.admissionDate}</p>
                                <Link to={`/collegeDetails/${college._id}`}>
                                    <button className="btn btn-primary">View Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Colleges;
