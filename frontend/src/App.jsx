import { useState } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Home from "./components/Home";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [UserDetails, setUserDetails] = useState(undefined);
  return (
    <>
      {UserDetails == undefined ? (
        <Auth setUserDetails={setUserDetails} />
      ) : (
        <Home UserDetails={UserDetails} />
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
