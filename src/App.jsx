import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const SERIAL_NUMBER = import.meta.env.VITE_SERIAL_NUMBER;

function App() {
  const [nodes, setNodes] = useState([]);
  const [info, setInfo] = useState({});

  const fetchNodes = async () => {
    let response = await fetch(`${BACKEND_URL}/nodes`);

    response = await response.json();

    setNodes(response.data);
  };

  const fetchInfo = async () => {
    let response = await fetch(`${BACKEND_URL}/public-node/${SERIAL_NUMBER}`);

    response = await response.json();

    setInfo(response);
  };

  useEffect(() => {
    fetchNodes();
    fetchInfo();
  }, []);

  return (
    <div className="p-2">
      <Navbar info={info} />
      <div className="grid grid-cols-2 grid-rows-2 mt-5 gap-5 mb-5">
        {nodes.slice(0, 4).map((node, i) => (
          <Card data={node} key={i} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
