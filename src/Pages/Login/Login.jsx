import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const newUser = { email, password };
        console.log(newUser);
        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error));
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error));
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 mr-12">
                        <img src='' alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold text-center">Login </h1>
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </form>
                            <p className='my-4 text-center'>New to Khelnar Dokan? <Link to='/signup' className='text-orange-600 font-bold'>Sign Up</Link> </p>
                            <Button onClick={handleGoogleSignIn} variant="outline-primary">
                                {""}
                                <FaGoogle /> Login with Google
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
