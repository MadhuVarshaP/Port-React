import React from "react";
import shipimg from "../images/pana.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex items-center justify-end">
      <div className="px-[100px]">
        <p className="text-[40px] font-bold w-[800px]">
          All Aboard! Let's Learn, Build and Ship Together to Build Products for
          the World
        </p>
        <p className="w-[800px] py-[40px]">
          Lorem ipsum dolor sit amet consecttur adipisicing elit. Quis numquam
          omnis necessitatibus incidunt aliquam sed nesciunt dignissimos
          accusamus eius repellat perspiciatis laudantium, nulla dolores, fugiat
          dolor neque fuga facilis repudiandae.
        </p>
        <Link
          to="/"
          type="submit"
          className="bg-[#2DA2B5] p-[10px] rounded-3xl text-white  w-[120px] flex justify-center hover:font-bold"
        >
          {" "}
          JOIN US{" "}
        </Link>
      </div>
      <div className="flex justify-end items-center mx-0">
        <img src={shipimg} alt="shipimg" className="h-[90vh] w-[700px]" />
      </div>
    </div>
  );
}

export default Home;
