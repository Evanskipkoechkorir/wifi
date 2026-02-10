import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Details from "./components/Details";
import Connected from "./components/Connected";
import Browse from "./components/Browse";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Disconnected from "./components/Disconnected";


export default function App() {
  const [home, setHome] = useState("home");
  const [data, setData] = useState(null);
  const [code, setCode] = useState("77");
  

  return (
    <div className="app">
      <Header/>
      {home === "home" && <Home setHome={setHome} setData={setData} />}
      {home === "details" && (
        <Details data={data} setHome={setHome} setCode={setCode} />
      )}
      {home === "connected" && <Connected code={code} setHome={setHome} /> }
      {home === "allowed" && <Browse  setHome={setHome}/>}
      {home === "expired" && <Disconnected setHome={setHome}/>}
      <Footer/>
    </div>
  );
}

