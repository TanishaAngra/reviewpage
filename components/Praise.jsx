'use client';

const Praise = () => {
  return (
    <>
      <div className="space-x-4 mt-4 mb-8">
        <button
          type="button"
          className="py-2.5 px-5 me-2 mb-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg hover:bg-green-200 hover:text-green-700 "
        >
          Good Quality
        </button>
        <button
          type="button"
          className="py-2.5 px-5 me-2 mb-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg hover:bg-green-200 hover:text-green-700 "
        >
          Great Experience
        </button>
        <button
          type="button"
          className="py-2.5 px-5 me-2 mb-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg hover:bg-green-200 hover:text-green-700 "
        >
          Value for money
        </button>
        <button
          type="button"
          className="py-2.5 px-5 me-2 mb-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg hover:bg-green-200 hover:text-green-700 "
        >
          On-time Delivery
        </button>
      </div>
    </>
  );
};

export default Praise;
