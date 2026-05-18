import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {

  const handleLogout = () => {

    localStorage.removeItem("token");

    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <nav className="bg-white shadow px-8 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-blue-600">
          Smart Leads Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>

      </nav>

      <div className="p-6">
        {children}
      </div>

    </div>
  );
};

export default MainLayout;