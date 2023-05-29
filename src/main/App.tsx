import { createContext, useEffect, useState } from "react";
import Login from "../pages/login/Login";
import {
  GlobalStyles,
  Loader,
} from "../styledComponents/main/styledComponents";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "../pages/home/Home";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "../styledComponents/main/Nav";

interface IUser {
  session: boolean;
}

export const User = createContext<any>({ session: false });

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [userSession, setUserSession] = useState<IUser>({ session: true });
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (
      userSession.session == false &&
      location.pathname !== "/Login" &&
      location.pathname !== "/Register"
    ) {
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
          {userSession.session === true ? <Nav /> : null}
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="Home" element={<Home />} />
              <Route path="Login" element={<Login />} />
              <Route path="Register" element={<Login />} />
            </Route>
          </Routes>
        </User.Provider>
      </div>
    </>
  );
}

export default App;
