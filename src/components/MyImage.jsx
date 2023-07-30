import React, { useState } from "react";

const MyImage = ({ imgs = [{ url: " " }] }) => {

  const [mainImage, setMainImage] = useState(imgs[0]);

  return (
    <div className="flex justify-center items-center gap-4">
      <figure className="flex flex-col gap-3">
      {imgs.map((elm, index) => (
          <img 
          src={elm?.url} 
          alt={elm?.filename} 
          key={index}
          className="w-[125px] h-[104px] rounded-md object-cover"
          onClick={() => setMainImage(elm)} />
      ))}
      </figure>
      <div>
        <img src={mainImage?.url} alt={mainImage?.filename} className="w-[480px] h-[450px] rounded-xl object-cover" />
      </div>
    </div>
  );
};

export default MyImage;
