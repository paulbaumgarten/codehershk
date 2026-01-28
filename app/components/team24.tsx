// components/ManualInstagramFeed.jsx
"use client"

import { InstagramEmbed } from 'react-social-media-embed';

const Team2024 = () => {
  // Array of Instagram post URLs
  const postUrls = [
    "https://www.instagram.com/p/C4IDjkQPiPp"
  ];

  return (
<div className="w-full p-4">
  <div className="flex flex-wrap justify-center gap-8">
    {postUrls.map((url, index) => (
      <div key={index} className="w-full md:w-[45%] lg:w-[30%] min-w-[400px]">
        <InstagramEmbed 
          url={url}
          width="100%"
        />
      </div>
    ))}
  </div>
</div>
  );
};

export default Team2024;