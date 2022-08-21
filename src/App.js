import React from "react";
import { ToastContainer } from 'react-toastify';
import Paint from "./container/Paint";

function App() {

  return (
    <React.Fragment>
      <Paint />

      <ToastContainer />
    </React.Fragment>
  );
}

export default App;