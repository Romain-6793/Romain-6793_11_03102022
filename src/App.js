
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
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
      <Switch>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="location" element={<LocationPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Switch>
    </BrowserRouter>

  );
}

export default App;


