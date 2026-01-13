// components/ManualInstagramFeed.jsx
"use client"

import { InstagramEmbed } from 'react-social-media-embed';

const ManualInstagramFeed = () => {
  // Array of Instagram post URLs
  const postUrls = [
    "https://www.instagram.com/p/DHJEUmYTiSE/?img_index=1",
    "https://www.instagram.com/p/DHJEZ5wzZIy/?img_index=1",
    "https://www.instagram.com/p/DHJEeNsTgfI/?img_index=1",
    "https://www.instagram.com/p/DHTapt1zTYh/?img_index=1",
    "https://www.instagram.com/p/DHTbWGOTWxw/?img_index=1",
    "https://www.instagram.com/p/DHTbpI2zpf0/?img_index=1",
    "https://www.instagram.com/p/DHTcGbSzZ1I/?img_index=1",
    "https://www.instagram.com/p/DHTchT7TS12/?img_index=1",
    "https://www.instagram.com/p/DHTdEBBT-7c/?img_index=1",
    "https://www.instagram.com/p/DHTdmx2z_sG/?img_index=1",
    "https://www.instagram.com/p/DHTeA0MzGlA/?img_index=1",
    "https://www.instagram.com/p/DHTe0tcTloO/?img_index=1",
    "https://www.instagram.com/p/DHTfYQJTDH3/?img_index=1"

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

export default ManualInstagramFeed;