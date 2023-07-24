import React from "react";
import heroImg from "../../../assets/images/hero-img1.png";

const HeroSection = () => {
    return (
        <div className="hero bg-white py-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={heroImg} className="" />
                <div className="text-start">
                    <h1 className="lg:text-5xl font-bold"> Anytime Anywhere <br /> Learn on your  Suitable Schedule</h1>
                    <p className="py-6 text-sm">Learning is important for numerous reasons, and it plays a significant role in personal and professional growth.</p>
                    <div className="form-control  flex">
                        <div className="">
                            <label className="label">

                            </label>
                            <input type="text" placeholder="Search" className="input input-bordered" />
                        </div>
                        <button className="btn bg-emerald-400 btn-sm w-16 my-4">Search</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;
