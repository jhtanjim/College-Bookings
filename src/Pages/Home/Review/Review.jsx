import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://college-booking-server-beta.vercel.app/review')
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
            });
    }, []);

    return (
        <div className='max-w-screen-xl mx-auto my-16' >
            <div className='mx-auto text-center md:w-3/12 my-16'>
                <h3 className='text-3xl font-bold uppercase underline underline-offset-8'>Review</h3>
            </div>
            <div className='grid lg:grid-cols-3 gap-8'>
                {reviews.map((review) => (
                    <div key={review._id} className='border rounded p-4'>
                        <img src={review.profileImage} alt={review.profileName} className='w-16 h-16 rounded-full mx-auto mb-4' />
                        <h4 className='text-lg font-semibold mb-2'>{review.profileName}</h4>
                        <p className='text-gray-600'>{review.reviewText}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Review;
