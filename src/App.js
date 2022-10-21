
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

    if (kasa) {
      setData(kasa)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kasa])
  console.log(kasa)
  console.log(data)


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout data={kasa} />}>
          <Route index element={<Home data={kasa} />} />
          <Route path="home" element={<Home data={kasa} />} />
          <Route path="about" element={<About data={kasa} />} />
          <Route path="location/:id" element={<LocationPage data={kasa} />} />
          <Route path="*" element={<NoPage data={kasa} />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;


