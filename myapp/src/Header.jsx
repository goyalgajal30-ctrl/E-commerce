import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const login = localStorage.getItem("login");

  const handleLogout = () => {
    localStorage.removeItem("login");
    navigate("/Login");
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <h2 className="text-2xl font-bold">
          My Shopping App
        </h2>

        {login === "true" && (
          <nav className="flex items-center gap-6">
            
            <Link
              to="/Product"
              className="hover:text-blue-400 transition duration-200"
            >
              Products
            </Link>

            <Link
              to="/Cart"
              className="hover:text-blue-400 transition duration-200"
            >
              Cart
            </Link>

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-medium transition duration-200"
            >
              Logout
            </button>

          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;