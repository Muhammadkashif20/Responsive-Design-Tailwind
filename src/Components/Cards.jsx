import React from 'react';

const Cards = () => {
  return (
    <div className=" min-h-screen flex justify-center items-center p-10 my-10">
      <div className="grid gap-6 grid-col-1 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 ">

        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 w-80">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Card Title 1</h3>
          <p className="text-gray-600 mb-4">
            This is a short description of the first card. Clean and simple design.
          </p>
          <button className="mt-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">
            Learn More
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 w-80">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Card Title 2</h3>
          <p className="text-gray-600 mb-4">
            This is a short description of the second card. Modern, user-friendly look.
          </p>
          <button className="mt-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">
            Learn More
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 w-80">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Card Title 3</h3>
          <p className="text-gray-600 mb-4">
            This is a short description of the third card. Sleek and elegant design.
          </p>
          <button className="mt-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">
            Learn More
          </button>
        </div>

      </div>
    </div>
  );
};

export default Cards;
