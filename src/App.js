
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import LocationPage from "./pages/LocationPage";
import NoPage from "./pages/NoPage";
import kasa from './datas/datas.json';



function App() {

  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    setData(kasa)
  }, [])
  console.log(data)


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="location" element={<LocationPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;


