import React from "react";

const ImageRender = ({item}) => {

  const {name, url} = item;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={`data:image/jpeg;base64,${url}`} alt=""   />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
           name
          </h5>
        </a>
        
      </div>
    </div>
  );
};

export default ImageRender;
