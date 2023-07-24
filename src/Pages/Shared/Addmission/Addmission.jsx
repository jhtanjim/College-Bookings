import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Addmission = () => {
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
        <div className='grid grid-cols-3 gap-8'>
            {colleges.map(college => (
                <div className="my-4 " key={college.id}>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={college.collegeImage} alt="" /></figure>
                        <div className="card-body">
                            <Link to='/submitCollege'>
                                <h2 className="card-title">{college.collegeName}</h2></Link>
                            <p className="py-3">Rating: {college.collegeRating}</p>
                            <p>Number of Research: {college.numberOfResearch}</p>
                            <p className='my-2'>Admission Date: {college.admissionDate}</p>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Addmission;
