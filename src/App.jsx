import FormReducer from "./components/Form/FormReducer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Auth from "./components/formAuth/Auth";
const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/form" element={<FormReducer />} ></Route>
        <Route path="/auth" element={<Auth />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;