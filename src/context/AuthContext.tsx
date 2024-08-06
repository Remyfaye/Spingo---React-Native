import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { showMessage } from "react-native-flash-message";

type AuthContextType = {
  authUser: any;
  setAuthUser: React.Dispatch<React.SetStateAction<any>>;
  config: { headers: { Authorization: string } };
  onLogout: () => Promise<void>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<any>>;
  isLoggedIn: () => Promise<void>;
  logoutLoading: boolean;
  setLogoutLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthContextProviderProps = {
  children: ReactNode;
};

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [authUser, setAuthUser] = useState<any | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [logoutLoading, setLogoutLoading] = useState<boolean>(false);

  const onLogout = async () => {
    try {
      setLogoutLoading(true);
      setIsLoading(true);
      await AsyncStorage.removeItem("user");
      await AsyncStorage.removeItem("token");
      setToken(null);
      setIsLoading(false);
      setAuthUser(null);
      setToken(null);
      router.push("/");
      showMessage({
        message: "User Logout Successfully",
        type: "success",
      });
      setLogoutLoading(false);
    } catch (error: any) {
      showMessage({
        message: `${error}`,
        type: "danger",
      });
      setIsLoading(false);
      setLogoutLoading(false);
    }
  };

  const isLoggedIn = async () => {
    let tempUser = await AsyncStorage.getItem("user");
    let tempToken = await AsyncStorage.getItem("token");
    if (!tempUser || !tempToken) {
      setAuthUser(null);
      setToken(null);
      router.push("/");
    } else {
      setAuthUser(JSON.parse(tempUser));
      setToken(tempToken);
      router.push("/Menu/Home");
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return (
    <AuthContext.Provider
      value={{
        authUser,
        setAuthUser,
        config,
        onLogout,
        isLoading,
        setIsLoading,
        token,
        setToken,
        isLoggedIn,
        logoutLoading,
        setLogoutLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider"
    );
  }
  return context;
};
