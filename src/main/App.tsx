import { createContext, useEffect, useLayoutEffect, useState } from "react";
import Login from "../pages/login/Login";
import {
  GlobalStyles,
  Loader,
} from "../styledComponents/main/styledComponents";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "../pages/home/Home";
import { useNavigate } from "react-router-dom";

interface IUser {
  session: boolean;
}

export const User = createContext<any>({ session: false });

function App() {
  const navigate = useNavigate();
  const [userSession, setUserSession] = useState<IUser>({ session: false });
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (userSession.session == false) {
      navigate("/Login");
    }
    setLoaded(true);
  }, []);

  return (
    <>
      <GlobalStyles />
      <Loader className={loaded ? "LoaderHide" : ""} />
      <div className="Content">
        <User.Provider value={{ data: userSession, setData: setUserSession }}>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="Home" element={<Home />} />
              <Route path="Login" element={<Login />} />
            </Route>
          </Routes>
        </User.Provider>
      </div>
    </>
  );
}

export default App;
