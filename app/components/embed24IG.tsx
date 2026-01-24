// components/ManualInstagramFeed.jsx
"use client"

import { InstagramEmbed } from 'react-social-media-embed';

const Insta24 = () => {
  // Array of Instagram post URLs
  const postUrls = [
    "https://www.instagram.com/p/C4GHbiXPFri/?img_index=1",
    "https://www.instagram.com/p/C3toxQLvYJh/?img_index=1",
    "https://www.instagram.com/p/C3fPC3ZvBx_/?img_index=1",
    "https://www.instagram.com/p/C3chIlkPnto/?img_index=1",
    "https://www.instagram.com/p/C4zq_D1PEEv/?img_index=1",
    "https://www.instagram.com/p/C42Px8WvxKN/?img_index=1",
    "https://www.instagram.com/p/C440kFCPHH-/?img_index=1",
    "https://www.instagram.com/p/C47ZU16PDJs/?img_index=1",
    "https://www.instagram.com/p/C49-MKtPel5/?img_index=1",
    "https://www.instagram.com/p/C5AjfhmvuMW/?img_index=1"

  ];

  return (
    <div className="p-4">
      {/* <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Our Instagram
      </h2> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {postUrls.map((url, index) => (
          <div key={index} className="flex justify-center">
            <InstagramEmbed 
              url={url}
              width={328}
              captioned
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insta24;