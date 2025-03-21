import { useEffect, useRef, useState } from "react";

import "./App.css";
import { useWs } from "./use-websocket";
import { DeviceTable } from "./components/pages/device-table";
import { Device } from "./components/shared-types";


const DEVICES = [
  {
    ip: "192.168.0.104",
    mac: "100:s3:23:00",
    name: "7",
  },
  {
    ip: "192.168.0.105",
    mac: "09:a5:44:00",
    name: "10",
  },
  {
    ip: "192.168.0.106",
    mac: "31:bb:82:ll",
    name: "10",
  },
];

function App() {
  const [devices, setDevices] = useState<Device[]>(DEVICES);
  const { isReady, ws, val } = useWs({
    url: "ws://localhost:12346",
  });

  return (
    <div className="">
      <button onClick={() => {}}>{val}</button>
      <DeviceTable rows={DEVICES} />
    </div>
  );
}

export default App;
