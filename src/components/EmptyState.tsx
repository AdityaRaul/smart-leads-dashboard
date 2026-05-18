const EmptyState = () => {
  return (
    <div className="bg-white p-10 rounded-xl shadow text-center">

      <h2 className="text-2xl font-bold mb-2">
        No Leads Found
      </h2>

      <p className="text-gray-500">
        Try adding a new lead.
      </p>

    </div>
  );
};

export default EmptyState;