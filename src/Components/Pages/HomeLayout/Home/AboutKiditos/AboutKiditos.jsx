import React from 'react';

const AboutKiditos = () => {
    return (
        <section className="py-12 bg-white mb-10 mt-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
          <h2 className="text-center font-bold text-5xl mt-4 mb-6 text-slate-600">
        About <span className="text-orange-400">Kiditos</span>
      </h2>
            <p className="mt-4 text-lg text-gray-500 font-semibold">
              Welcome to Kiditos, the ultimate destination for all your toy needs!
            </p>
          </div>
          <div className="mt-10">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="flex flex-col items-center sm:items-start">
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Mission
                </h3>
                <p className="mt-4 text-base text-gray-500 font-semibold">
                  At Kiditos, our mission is to bring joy, imagination, and learning to children through high-quality toys. We believe that play is an essential part of childhood development, and our carefully curated collection of toys aims to foster creativity, problem-solving skills, and social interaction.
                </p>
              </div>
              <div className="flex flex-col items-center sm:items-start mt-12 lg:mt-0">
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Vision
                </h3>
                <p className="mt-4 text-base text-gray-500 font-semibold">
                  We envision a world where every child has access to toys that inspire, educate, and entertain. We strive to be the go-to platform for parents, caregivers, and toy enthusiasts, providing a wide range of toys that cater to different age groups, interests, and developmental stages. Our vision is to create magical moments and happy memories for children everywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default AboutKiditos;