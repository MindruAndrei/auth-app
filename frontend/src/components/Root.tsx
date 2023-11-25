import { Outlet } from "react-router-dom";
import { AppProvider } from "../context/AppContext";
import Navigation from "./Navigation";

export default function Root() {


  return (
    <AppProvider>
      <div className="bg-gray-800 h-screen">
        <div className="container flex justify-between items-center p-4">
          <Navigation />
        </div>
        <div className="p-6 bg-gray-100 h-[100%]">
          <Outlet />
        </div>
      </div>
    </AppProvider>
  );
}
