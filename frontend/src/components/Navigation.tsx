import { Link, useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

function Navigation() {
  const location = useLocation();
  const { userData, handleLogout } = useAppContext();

  const isTabActive = (pathname: string) => {
    return location.pathname === pathname;
  };

  const getTabStyle = (pathname: string) => {
    return isTabActive(pathname)
      ? "text-yellow-500 border-b-4 border-yellow-500"
      : "text-white hover:text-gray-300";
  };

  return (
    <>
      <div className="flex flex-row items-center">
        <h1 className="text-2xl font-bold text-white">App Name</h1>
        {userData && <h1 className="text-white ml-4">Welcome, {userData.user.name}</h1>}
      </div>
      <nav>
        <ul className="flex space-x-4">
          {userData?.authenticated ? (
            <>
              <li>
                <Link to="/home" className={`text-lg ${getTabStyle("/home")}`}>
                  Home
                </Link>
              </li>
              <li>
                <span
                  onClick={handleLogout}
                  className={`text-lg ${getTabStyle("/logout")}`}
                >
                  Logout
                </span>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" className={`text-lg ${getTabStyle("/login")}`}>
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
