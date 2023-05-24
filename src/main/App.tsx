import { useEffect, useState } from "react";
import Login from "../pages/login/Login";
import {
  GlobalStyles,
  Loader,
} from "../styledComponents/main/styledComponents";
import "./App.css";

function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <GlobalStyles />
      <Loader className={loaded ? "LoaderHide" : ""} />
      <div className="Content">
        <Login />
      </div>
    </>
  );
}

export default App;
