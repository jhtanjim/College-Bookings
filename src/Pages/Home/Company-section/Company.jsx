import React from "react";
import { FaApple, FaDribbble, FaFileInvoiceDollar, FaGoogle, FaPinterest, FaVimeo } from 'react-icons/fa';

const Company = () => {
  return (
    <div className="max-w-screen-lg mx-auto  grid lg:grid-cols-8 grid-cols-3 ">
      <h3 className=" flex text-xl gap- align-items-center gap-4 ">
        <FaVimeo></FaVimeo>Vimeo
      </h3>



      <h3 className=" flex text-xl gap- align-items-center gap-4 ">
        <FaPinterest></FaPinterest> Pinterest
      </h3>



      <h3 className=" flex text-xl gap- align-items-center gap-4 ">
        <FaDribbble></FaDribbble> Dribble
      </h3>



      <h3 className=" flex text-xl gap- align-items-center gap-4 ">
        {" "}
        <FaApple></FaApple>Apple
      </h3>



      <h3 className=" flex text-xl gap- align-items-center gap-4 ">
        {" "}
        <FaFileInvoiceDollar></FaFileInvoiceDollar> Finder
      </h3>



      <h2 className=" flex align-items-center gap-1">
        {" "}
        <FaGoogle></FaGoogle> Google
      </h2>



    </div>
  );
};

export default Company;
