import { ReactNode } from "react";
import { useWs } from "./use-websocket";
import { WsContext } from "./ws.context";

interface WsProvider {
  children: ReactNode;
}
const WsProvider = ({ children }: WsProvider) => {
  const ws = useWs({
    url: "ws://localhost:12346",
  });

  return  <WsContext.Provider value={ws}>{children}</WsContext.Provider>;
};
