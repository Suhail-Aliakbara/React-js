// import React from "react";

// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(`https://api.github.com/users/Suhail-Aliakbara`)
  //     .then((response) => response.json)
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // });
  return (
    <div className="text-center text-white bg-gray-600 m-4 p-4 text-3xl ">
      Github Followers: {data?.followes}
      <img src="data.avatar_url" alt="Git Picture" width={300} />
    </div>
  );
}
export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch(`https://api.github.com/users/Suhail-Aliakbara`);
  return response.json();
};
