import React, { useEffect } from "react";

interface SnackBarProps {
  showSnackbar: {
    visible: boolean;
    message: string;
    type: string;
  };
  setShowSnackbar: (state: any) => void;
}

function Snackbar({ showSnackbar, setShowSnackbar }: SnackBarProps) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSnackbar((prev: any) => ({ ...prev, visible: false }));
    }, 5000);

    return () => clearTimeout(timeout);
  }, [showSnackbar]);

  return (
    <>
      {" "}
      {showSnackbar.visible && (
        <div
          className={`text-center fixed top-2 left-1/2 transform -translate-x-1/2 w-[300px]  ${
            showSnackbar.type === "error" ? "bg-red-800" : "bg-green-800"
          } text-white p-4 rounded-md font-poppins`}
        >
          {showSnackbar.message}
        </div>
      )}
    </>
  );
}

export default Snackbar;
