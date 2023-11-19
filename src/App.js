import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Register from "./register";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Verify from "./verify";


const App = () => {
  ReactDOM.render(
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </Router>
    </Provider>,
    document.getElementById("root")
  );
};
export default App;
