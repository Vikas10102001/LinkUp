import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Messenger from "./pages/Messenger";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import store from "./store/store";
import { useEffect, useState } from "react";
import AlertMessage from "./utils/shared/component/Alert";
function App() {
  const [alertData, setAlertData] = useState(store.getState().alert.data);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setAlertData(store.getState().alert.data);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/messenger" element={<Messenger />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {alertData && (
        <AlertMessage type={alertData.type} content={alertData.content} />
      )}
    </>
  );
}

export default App;
