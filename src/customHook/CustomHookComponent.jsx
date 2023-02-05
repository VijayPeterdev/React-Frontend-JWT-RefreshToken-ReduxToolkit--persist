import React, { useEffect, useState } from "react";
import { useFetch } from "./customHook";

const CustomHookComponent = () => {

// ===================================================================
  // easy way to call custom hook below method custom hook call pannura method

//   const  {data}  = useFetch("https://jsonplaceholder.typicode.com/posts")

//   console.log(data);
// ==================================================================

  // Normal method

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const res = await fetch(
  //           "https://netflixserver-restapi-vijaypeterdev.vercel.app/"
  //         );

  //         //json parse pannurom
  //         const jsonResponse = await res.json();

  //         setData(jsonResponse);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchData();
  //   }, []);

  // [] - onetime fetch aakum

  return (
    <div>
      <h2>custom Hook</h2>
      {/* {data && data.map((val) => <h1 >{val.title}</h1>)} */}
    </div>
  );
};

export default CustomHookComponent;
