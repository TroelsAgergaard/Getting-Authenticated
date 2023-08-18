import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  const [context, setContext] = useState({});

  return (
    <>
      {/* <AuthContext.Provider value={auth}> */}
      <Outlet context={[context, setContext]} />
      {/* </AuthContext.Provider> */}
    </>
  );
}

export default App;
