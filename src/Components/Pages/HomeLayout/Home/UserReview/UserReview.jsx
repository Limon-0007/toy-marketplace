import React from "react";
// import { ReactStars } from 'react-rating-stars-component';

const UserReview = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      rating: 4,
      review: "Great toy, my kids love it!",
      image: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg&uid=R101288307&ga=GA1.1.311772693.1668666155&semt=sph",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 5,
      review: "Best toy ever!",
      image: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&uid=R101288307&ga=GA1.2.311772693.1668666155&semt=sph",
    },
    {
      id: 3,
      name: "David Johnson",
      rating: 3.5,
      review: "Good toy, but could be better.",
      image: "https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?size=626&ext=jpg&uid=R101288307&ga=GA1.1.311772693.1668666155&semt=sph",
    },
  ];

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
      <h2 className="text-center font-bold text-5xl mt-4 mb-6 text-slate-600">
        User <span className="text-orange-400">Reviews</span>
      </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white shadow-md rounded-lg p-4">
              <img
                className="w-full h-40 object-cover rounded-md"
                src={review.image}
                alt={review.name}
              />
              <h3 className="text-lg font-semibold mt-2">{review.name}</h3>
              <p className="text-gray-600">{review.review}</p>
              <div className="mt-4">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserReview;
