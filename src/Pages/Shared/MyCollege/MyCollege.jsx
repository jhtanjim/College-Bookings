import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const MyCollege = () => {
    const { user } = useContext(AuthContext);
    const [collegeDetails, setCollegeDetails] = useState([]);

    const collegeUrl = `http://localhost:5000/addmission?email=${user.email}`;

    useEffect(() => {
        fetch(collegeUrl)
            .then(res => res.json())
            .then(data => {
                setCollegeDetails(data);
            })
            .catch(error => console.error('Error fetching college details:', error));
    }, [collegeUrl]);

    return (
        <div>
            {collegeDetails.length > 0 ? (
                <div>
                    <h2>College Details</h2>
                    {collegeDetails.map((college) => (
                        <div key={college._id}>
                            <p>College Name: {college.candidateName}</p>
                            <p>Subject: {college.subject}</p>
                            <p>Email: {college.candidateEmail}</p>
                            <p>Phone: {college.candidatePhone}</p>
                            <p>Address: {college.address}</p>
                            <p>Date of Birth: {college.dateOfBirth}</p>
                            {/* Display other college details here */}
                            <hr />
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading college details...</p>
            )}
        </div>
    );
};

export default MyCollege;
