const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-md w-[400px]">

        <h1 className="text-2xl font-bold text-center mb-6">
          Register
        </h1>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Enter Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Enter Email"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full border p-3 rounded-lg"
          />

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Register
          </button>

        </form>

      </div>

    </div>
  );
};

export default Register;