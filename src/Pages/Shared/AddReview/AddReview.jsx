import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';

const AddReview = () => {
    const { user } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        // Here you can handle the form submission and send the review data to the server
        // The 'data' object will contain the review details submitted by the user, including the image
        // You can use the fetch() function to make a POST request to your API endpoint (e.g., localhost:5000/review) to save the review data.

        // Merge the form data with the logged-in user's profile information
        const reviewData = {
            ...data,
            profileName: user.displayName,
            profileImage: user.photoURL,
        };

        fetch('https://college-booking-server-beta.vercel.app/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                // Show success message using SweetAlert2
                Swal.fire({
                    title: 'Success!',
                    text: 'Review Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool',
                });
                // Reset the form after successful submission
                reset();
            })
            .catch((error) => {
                console.error(error);
                // Show error message using SweetAlert2
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to add review',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            });
    };

    return (
        <div className="bg-gray-100 px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8">Add Your Review</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
                <div className="mb-6">
                    <label className="block font-medium mb-1" htmlFor="reviewText">
                        Review
                    </label>
                    <textarea
                        {...register('reviewText', { required: 'This field is required' })}
                        placeholder="Write your review here..."
                        className="w-full px-3 py-2 border rounded"
                    />
                    {errors.reviewText && <span className="text-red-500">{errors.reviewText.message}</span>}
                </div>

                <div className="mb-6">
                    <label className="block font-medium mb-1" htmlFor="profileName">
                        Profile Name
                    </label>
                    <input
                        type="text"
                        value={user.displayName} // Set the user's name as the default value
                        disabled // Disable the input to prevent editing
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-6">
                    <label className="block font-medium mb-1" htmlFor="profileImage">
                        Profile Image
                    </label>
                    <input
                        type="text"
                        value={user.photoURL} // Set the user's profile image URL as the default value
                        disabled // Disable the input to prevent editing
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 rounded">
                    Submit Review
                </button>
            </form>
        </div>
    );
};

export default AddReview;
