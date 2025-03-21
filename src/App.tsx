import { useEffect, useRef, useState } from "react";

import "./App.css";
import { useWs } from "./use-websocket";
import { DeviceTable } from "./components/pages/device-table";
import { Device, DeviceStatus } from "./components/shared-types";
import { Logo } from "./components/pages/logo";

const DEVICES = [
  {
    ip: "192.168.0.104",
    mac: "100:s3:23:00",
    name: "7",
    status: DeviceStatus.Disconnected,
  },
  {
    ip: "192.168.0.105",
    mac: "09:a5:44:00",
    name: "10",
    status: DeviceStatus.Charging,
  },
  {
    ip: "192.168.0.106",
    mac: "31:bb:82:ll",
    name: "10",
    status: DeviceStatus.Powered,
  },
];

function App() {
  const [devices, setDevices] = useState<Device[]>(DEVICES);
  const { isReady, ws, val } = useWs({
    url: "ws://localhost:12346",
  });

  return (
    <div className="">
      <header >
        <div className="flex  items-center gap-3">
          <Logo /> <span>Вільне небо</span>{" "}
        </div>
      </header>
      <main>
        <DeviceTable rows={DEVICES} />
      </main>
    </div>
  );
}

export default App;
