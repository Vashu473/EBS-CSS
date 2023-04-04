import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFetch } from "../api/NormalApi";
export const AuthContext = createContext({
  profileData: {},
  callProfileData: () => {},
  isLogin: false,
  moveToNext: () => {},
  setIsLogin: () => {},
  openAlert: () => {},
  closeAlert: () => {},
  alert: false,
  alertMsg: { title: "", desc: "" },
  setAlertMsg: () => {},
  logout:()=>{}
});

const AuthProvider = ({ children }) => {
  useEffect(() => {
    callProfileData();
  }, []);
  const [alert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState({ title: "", desc: "" });

  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [profileData, setProfileData] = useState({});
  const callProfileData = async () => {
    try {
      const res = await getFetch("user/profile");
      if (res.success) {
        setProfileData(res?.message);
        setIsLogin(true);
      }
    } catch (error) {
      return error.message;
    }
  };
  const closeAlert = () => setAlert(false);
  const openAlert = () => setAlert(true);
  const moveToNext = (url,state) => {
    return navigate(url,{state});
  };
  const logout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
  };
  return (
    <AuthContext.Provider
      value={{
        profileData,
        isLogin,
        callProfileData,
        moveToNext,
        setIsLogin,
        openAlert,
        closeAlert,
        alert,
        alertMsg,
        setAlertMsg,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
