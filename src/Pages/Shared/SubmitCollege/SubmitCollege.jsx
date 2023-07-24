import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'; // Import SweetAlert2 library
import { AuthContext } from '../../Provider/AuthProvider';

const SubmitCollege = () => {


    const { user } = useContext(AuthContext)


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        // Here you can handle the form submission and send the data to the server

        fetch('https://college-booking-server-beta.vercel.app/addmission', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    // Show success message using SweetAlert2
                    Swal.fire({
                        title: 'Success!',
                        text: 'College Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    });
                    // Reset the form after successful submission
                    reset();
                } else {
                    // Show error message using SweetAlert2
                    Swal.fire({
                        title: 'Error!',
                        text: 'Failed to add college',
                        icon: 'error',
                        confirmButtonText: 'OK',
                    });
                }
            })
            .catch((error) => {
                console.error(error);
                // Show error message using SweetAlert2
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to add college',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            });
    };

    return (
        <div className="bg-gray-100 px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8">Submit College</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
                <div className="mb-6">
                    <label className="block font-medium mb-1" htmlFor="candidateName">
                        Candidate Name
                    </label>
                    <input
                        type="text"
                        {...register('candidateName', { required: 'This field is required' })}
                        placeholder="Candidate Name"
                        className="w-full px-3 py-2 border rounded"
                    />
                    {errors.candidateName && <span className="text-red-500">{errors.candidateName.message}</span>}
                </div>

                <div className="mb-6">
                    <label className="block font-medium mb-1" htmlFor="subject">
                        Subject
                    </label>
                    <input
                        type="text"
                        {...register('subject', { required: 'This field is required' })}
                        placeholder="Subject"
                        className="w-full px-3 py-2 border rounded"
                    />
                    {errors.subject && <span className="text-red-500">{errors.subject.message}</span>}
                </div>

                <div className="mb-6">
                    <label className="block font-medium mb-1" htmlFor="candidateEmail">
                        Candidate Email
                    </label>
                    <input
                        type="email"
                        {...register('candidateEmail', { required: 'This field is required' })}
                        placeholder="Candidate Email"
                        className="w-full px-3 py-2 border rounded"
                    />
                    {errors.candidateEmail && <span className="text-red-500">{errors.candidateEmail.message}</span>}
                </div>

                <div className="mb-6">
                    <label className="block font-medium mb-1" htmlFor="candidatePhone">
                        Candidate Phone
                    </label>
                    <input
                        type="tel"
                        {...register('candidatePhone', { required: 'This field is required' })}
                        placeholder="Candidate Phone"
                        className="w-full px-3 py-2 border rounded"
                    />
                    {errors.candidatePhone && <span className="text-red-500">{errors.candidatePhone.message}</span>}
                </div>

                <div className="mb-6">
                    <label className="block font-medium mb-1" htmlFor="address">
                        Address
                    </label>
                    <input
                        type="text"
                        {...register('address', { required: 'This field is required' })}
                        placeholder="Address"
                        className="w-full px-3 py-2 border rounded"
                    />
                    {errors.address && <span className="text-red-500">{errors.address.message}</span>}
                </div>

                <div className="mb-6">
                    <label className="block font-medium mb-1" htmlFor="dateOfBirth">
                        Date of Birth
                    </label>
                    <input
                        type="date"
                        {...register('dateOfBirth', { required: 'This field is required' })}
                        className="w-full px-3 py-2 border rounded"
                    />
                    {errors.dateOfBirth && <span className="text-red-500">{errors.dateOfBirth.message}</span>}
                </div>

                <div className="mb-6">
                    <label className="block font-medium mb-1" htmlFor="image">
                        Image
                    </label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        {...register('image')}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};
export default SubmitCollege;
