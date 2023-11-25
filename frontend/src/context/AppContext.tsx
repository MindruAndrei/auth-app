import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { currentUser, logout } from "../api/user";
import Snackbar from "../components/Snackbar";
import { User } from "../types/user";

type UserData = {
  authenticated: boolean;
  user: {
    email: string;
    name: string;
    createdAt: Date | null;
  };
} | null;

type AppContextType = {
  refetch: boolean;
  setRefetch: (state: boolean) => void;
  handleLogout: () => void;
  userData: UserData;
  setShowSnackbar: (state: any) => void;
};

const AppContext = createContext<AppContextType>({
  refetch: false,
  setShowSnackbar: () => {},
  handleLogout: () => {},
  setRefetch: () => {},
  userData: {
    authenticated: false,
    user: {
      email: "",
      name: "",
      createdAt: null,
    },
  },
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<User | null>(null);
  const [refetch, setRefetch] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState({
    visible: false,
    type: "",
    message: "",
  });
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token && !userData) {
      currentUser()
        .then((resp) => {
          setUserData(resp);
          setRefetch(false);
          navigate("/home");
        })
        .catch((err) =>
          setShowSnackbar({
            visible: true,
            message: err.message,
            type: "error",
          })
        );
    } else if (!token && !userData) {
      navigate("/login");
    }
  }, [refetch, token]);

  const handleLogout = () => {
    logout()
      .then(() => {
        setUserData(null);
        localStorage.clear();
      })
      .catch((err) => console.log(err));
  };

  return (
    <AppContext.Provider
      value={{ userData, refetch, setRefetch, handleLogout, setShowSnackbar }}
    >
      <Snackbar showSnackbar={showSnackbar} setShowSnackbar={setShowSnackbar} />
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  return context;
};
