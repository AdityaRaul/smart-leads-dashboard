const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-3 mt-6">

      <button className="bg-gray-300 px-4 py-2 rounded-lg">
        Prev
      </button>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        1
      </button>

      <button className="bg-gray-300 px-4 py-2 rounded-lg">
        2
      </button>

      <button className="bg-gray-300 px-4 py-2 rounded-lg">
        3
      </button>

      <button className="bg-gray-300 px-4 py-2 rounded-lg">
        Next
      </button>

    </div>
  );
};

export default Pagination;