import { Routes, Route } from "react-router-dom";
import DefaulLayout from './layouts/DefaultLayout';

import "./assets/scss/index.scss"

function App() {
  return (
    <Routes>
        <Route path="/*" element={<DefaulLayout />} />
    </Routes>
  );
}

export default App;
