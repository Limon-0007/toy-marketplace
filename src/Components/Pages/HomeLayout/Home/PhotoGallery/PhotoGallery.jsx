import React from "react";

const PhotoGallery = () => {
  const photos = [
    "https://img.freepik.com/free-psd/teddy-holding-paper_53876-12210.jpg?size=626&ext=jpg&uid=R101288307&ga=GA1.2.311772693.1668666155&semt=ais",
    "https://img.freepik.com/premium-vector/take-risk-slogan-with-bear-toy-walking-string-illustration-black-background_241806-134.jpg?size=626&ext=jpg&uid=R101288307&ga=GA1.2.311772693.1668666155&semt=ais",
    "https://img.freepik.com/premium-vector/bear-toy-fashion-style-stage-lighting-illustration_241806-285.jpg?size=626&ext=jpg&uid=R101288307&ga=GA1.1.311772693.1668666155&semt=ais",
    "https://img.freepik.com/free-photo/one-teddy-bear-hugs-another_144627-15245.jpg?size=626&ext=jpg&uid=R101288307&ga=GA1.2.311772693.1668666155&semt=ais",
    "https://img.freepik.com/premium-photo/cute-brown-teddy-bear-colored-knitted-scarf-sitting-white-background_116441-7370.jpg?size=626&ext=jpg&uid=R101288307&ga=GA1.2.311772693.1668666155&semt=ais",
    "https://t4.ftcdn.net/jpg/01/22/43/91/240_F_122439138_BSHshfTQU8DgBLTTSSyIRFwYRcq3Da1F.jpg",
    // Add more photo URLs as needed
  ];

  return (
    <div>
      <h2 className="text-slate-700 text-center text-5xl font-bold">
        Our <span className="text-orange-600">Products</span>
      </h2>

      <div className="container mx-auto p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 border rounded p-4">
          {photos.map((photo, index) => (
            <div key={index} className="relative border border-white">
              <img
                src={photo}
                alt={`Photo ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;



//TODO: need to make react tabs and two extra section
//need to sorting in my toys page
//implement search option